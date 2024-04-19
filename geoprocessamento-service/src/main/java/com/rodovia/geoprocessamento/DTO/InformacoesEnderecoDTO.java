package com.rodovia.geoprocessamento.DTO;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "enderecos")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class InformacoesEnderecoDTO {
    @Id
    private Integer id;
    private Double latitude;
    private Double longitude;
    private String enderecoFormatado;
    private String rua;
    private String bairro;
    private String cidade;
    private String estado;
    private String pais;
    private String cep;
    private Double latitutParam;
    private Double longitudeParam;
    private Date dataHoraOperacao;
}