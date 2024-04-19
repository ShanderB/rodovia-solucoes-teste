package com.rodovia.geoprocessamento.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.rodovia.geoprocessamento.DTO.InformacoesEnderecoDTO;

public interface EnderecoRepository extends MongoRepository<InformacoesEnderecoDTO, String> {}