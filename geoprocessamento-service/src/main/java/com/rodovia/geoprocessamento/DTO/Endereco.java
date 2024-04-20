package com.rodovia.geoprocessamento.DTO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class Endereco {

    @JsonProperty("road")
    private String rua;

    @JsonProperty("suburb")
    private String bairro;

    @JsonProperty("town")
    private String cidade;

    @JsonProperty("state")
    private String estado;

    @JsonProperty("country")
    private String pais;

    @JsonProperty("postcode")
    private String cep;
    
}
