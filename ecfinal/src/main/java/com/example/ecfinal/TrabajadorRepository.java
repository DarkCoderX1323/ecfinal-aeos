package com.example.ecfinal;

import org.springframework.data.annotation.RepositoryRestResource;
import org.springframework.data.repository.CrudRepository;

@RepositoryRestResource(collectionResourceRel = "trabajadores", path = "trabajadores")
public interface TrabajadorRepository extends CrudRepository<Trabajador, Long> {

}
