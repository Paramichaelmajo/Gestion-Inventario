package com.example.proyecto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.proyecto.entity.Usuario;
import com.example.proyecto.repository.UsuarioRepository;

import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class UsuarioService {
	
	@Autowired
	private UsuarioRepository usuarioRepository;

	public Usuario login(@RequestBody Usuario usuario) {

		List<Usuario> usuarios = usuarioRepository.findAll();

		if (!usuarios.isEmpty()) {
			return usuarios.get(0);
		}
		return null;
	}
	
	public List<Usuario> findAll() {
		return usuarioRepository.findAll();
	}
}
