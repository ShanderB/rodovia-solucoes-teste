package com.rodovia.geoprocessamento.rest;

import com.rodovia.geoprocessamento.service.EnderecoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
        return enderecoService.getEndereco(latitude, longitude);
    }
}
