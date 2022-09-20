package com.example.proyecto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.proyecto.entity.Tipo;
import com.example.proyecto.service.TipoService;

@RestController
@RequestMapping("/tipo")
public class TipoController {
	
	@Autowired
	private TipoService tipoService;

	@GetMapping
	private ResponseEntity<List<Tipo>> getAllTipos(){
		return ResponseEntity.ok(tipoService.findAll());
	}
}





