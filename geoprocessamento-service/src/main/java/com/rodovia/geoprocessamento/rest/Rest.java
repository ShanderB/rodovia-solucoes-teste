package com.rodovia.geoprocessamento.rest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@EnableCaching
public class Rest {

    @Value("${api.endpoint.latlong}")
    private String apiEndpoint;


    @Cacheable("endereco")
    @GetMapping("/getEndereco")
    public ResponseEntity<String> getEndereco(
        @RequestParam(required = true) Double latitude,
        @RequestParam(required = true) Double longitude
        ) {
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(apiEndpoint)
        .queryParam("format", "json")
        .queryParam("lat", latitude)
        .queryParam("lon", longitude);
        System.out.println(builder.toUriString());

        ResponseEntity<String> response = new RestTemplate().getForEntity(builder.toUriString(), String.class);
        return response;
    }
}
