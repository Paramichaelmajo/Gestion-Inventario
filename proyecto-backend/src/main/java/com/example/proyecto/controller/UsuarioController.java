package com.example.proyecto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.proyecto.entity.Usuario;
import com.example.proyecto.service.UsuarioService;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

	
	@Autowired
	private UsuarioService usuarioService;
	
	
	@PostMapping(path = "/login")
	public Usuario login(@RequestBody Usuario usuario) {
		
		List<Usuario> usuarios = usuarioService.findAll();
				
		if(!usuarios.isEmpty()) {
			return usuarios.get(0);
		}
		return null;
	}
	/*Los usuarios solamente hay que consultarlos*/
	@GetMapping
	private ResponseEntity<List<Usuario>> getAllUsuarios(){
		return ResponseEntity.ok(usuarioService.findAll());
	}
}


