package com.example.proyecto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.proyecto.entity.Proveedor;

@Repository("proveedorRepository")
public interface ProveedorRepository extends JpaRepository<Proveedor, Integer>{

}
