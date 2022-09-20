package com.example.proyecto.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.proyecto.entity.Producto;
import com.example.proyecto.service.ProductoService;

@RestController
@RequestMapping("/producto")
public class ProductoController {
	
	@Autowired
	private ProductoService productoService;

	@GetMapping
	private ResponseEntity<List<Producto>> listarProductos(){
		return ResponseEntity.ok(productoService.listarProductos());
	}
	
	@PostMapping
	private ResponseEntity<Producto> guardarProducto(@RequestBody Producto producto){
		try {
			Producto productoGuardado = productoService.guardarProducto(producto);
			return ResponseEntity.created(new URI("/producto/"+productoGuardado.getProdId())).body(productoGuardado);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	}
	
	@DeleteMapping(value="delete/{id}")
	private ResponseEntity<Boolean> borrarProducto(@PathVariable("id") Integer id){
		productoService.eliminarProductoPorId(id);
		return ResponseEntity.ok(!(productoService.findById(id)!=null));
	}  
}
