package com.rodovia.geoprocessamento.DTO;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "enderecos")
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
@Builder
public class InformacoesEnderecoDTO {
    @Id
    private String id;

    @JsonProperty("lat")
    private Double latitude;

    @JsonProperty("lon")
    private Double longitude;
    
    @JsonProperty("display_name")
    private String enderecoFormatado;

/*     @JsonProperty("address")
    private String rua;
    private String bairro;
    private String cidade;
    private String estado;
    private String pais;
    private String cep;
    private Double latitutParam;
    private Double longitudeParam;
    private Date dataHoraOperacao; */
}