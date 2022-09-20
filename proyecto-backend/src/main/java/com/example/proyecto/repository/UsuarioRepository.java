package com.example.proyecto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.proyecto.entity.Usuario;

@Repository//("usuarioRepository")
public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{

}
