package com.rodovia.geoprocessamento.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rodovia.geoprocessamento.service.EnderecoService;

@RestController
@EnableCaching
public class Rest {

    @Autowired
    private EnderecoService enderecoService;

    @Cacheable("endereco")
    @GetMapping("/getEndereco")
    public ResponseEntity<String> getEndereco(
            @RequestParam(required = true) Double latitude,
            @RequestParam(required = true) Double longitude) {

        ResponseEntity<String> response;

        try {
            response = enderecoService.getEndereco(latitude, longitude);

        } catch (Exception e) {
            System.out.println("Erro ao buscar endereço: " + e.getMessage());
            response = new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return response;
    }
}
