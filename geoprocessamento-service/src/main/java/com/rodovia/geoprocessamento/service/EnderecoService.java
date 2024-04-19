package com.rodovia.geoprocessamento.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class EnderecoService {

    @Value("${api.endpoint.latlong}")
    private String apiEndpoint;

    public ResponseEntity<String> getEndereco(Double latitude, Double longitude) {
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(apiEndpoint)
                .queryParam("format", "json")
                .queryParam("lat", latitude)
                .queryParam("lon", longitude);

        ResponseEntity<String> response = new RestTemplate().getForEntity(builder.toUriString(), String.class);
        return response;
    }

   /*InformacoesEnderecoDTO endereco = InformacoesEnderecoDTO.builder()
    .id(1)
    .latitude(40.7128)
    .longitude(-74.0060)
    .enderecoFormatado("123 Main St, New York, NY")
    .rua("Main St")
    .bairro("Manhattan")
    .cidade("New York")
    .estado("NY")
    .pais("USA")
    .cep("10001")
    .latitutParam(40.7128)
    .longitudeParam(-74.0060)
    .dataHoraOperacao(new Date())
    .build();*/

}
