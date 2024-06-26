package com.rodovia.geoprocessamento.DTO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

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

    @JsonProperty("address")
    private Endereco endereco;

    private Double latitutParam;
    private Double longitudeParam;
    private Date dataHoraOperacao;
}