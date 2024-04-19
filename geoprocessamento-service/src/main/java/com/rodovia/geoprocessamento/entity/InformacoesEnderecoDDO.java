package com.rodovia.geoprocessamento.entity;

public record InformacoesEnderecoDDO( 
    String id,
    String latitude,
    String longitude,
    String enderecoFormatado,
    String rua,
    String bairro,
    String cidade,
    String estado,
    String pais,
    String cep
) {}
