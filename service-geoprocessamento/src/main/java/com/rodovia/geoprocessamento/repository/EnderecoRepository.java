package com.rodovia.geoprocessamento.repository;

import com.rodovia.geoprocessamento.DTO.InformacoesEnderecoDTO;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EnderecoRepository extends MongoRepository<InformacoesEnderecoDTO, String> {}