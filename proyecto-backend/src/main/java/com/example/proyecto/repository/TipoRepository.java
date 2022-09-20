package com.example.proyecto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.proyecto.entity.Tipo;

@Repository("tipoRepository")
public interface TipoRepository extends JpaRepository<Tipo, Integer>{

}
