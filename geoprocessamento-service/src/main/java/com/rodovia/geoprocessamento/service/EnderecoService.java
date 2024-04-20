package com.rodovia.geoprocessamento.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.rodovia.geoprocessamento.DTO.InformacoesEnderecoDTO;
import com.rodovia.geoprocessamento.repository.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Date;

@Service
public class EnderecoService {

    @Value("${api.endpoint.latlong}")
    private String apiEndpoint;

    @Autowired
    private EnderecoRepository enderecoRepository;

    public ResponseEntity<String> getEndereco(Double latitude, Double longitude) {
        ResponseEntity<String> response;
        try {
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(apiEndpoint)
                    .queryParam("format", "json")
                    .queryParam("lat", latitude)
                    .queryParam("lon", longitude);

            response = new RestTemplate().getForEntity(builder.toUriString(), String.class);

            if (!response.getStatusCode().equals(HttpStatus.OK)) {
                return new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
            }

            saveEndereco(response.getBody(), latitude, longitude);

        } catch (Exception e) {
            System.out.println("Erro ao buscar endereço: " + e.getMessage());
            response = new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return response;
    }

    private void saveEndereco(String responseBody, Double latitude, Double longitude)
            throws JsonMappingException, JsonProcessingException {
        try {
            InformacoesEnderecoDTO endereco = new ObjectMapper().readValue(responseBody, InformacoesEnderecoDTO.class);
            endereco.setDataHoraOperacao(new Date());
            endereco.setLatitutParam(latitude);
            endereco.setLongitudeParam(longitude);

            enderecoRepository.save(endereco);
        } catch (JsonProcessingException e) {
            System.out.println("Erro ao inserir no banco: " + e.getMessage());
        }
    }
}
