package com.example.ecfinal;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "empresas", path = "empresas")
public interface EmpresaRepository extends PagingAndSortingRepository<Empresa, Long> {

}

