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

import com.example.proyecto.entity.Proveedor;
import com.example.proyecto.service.ProveedorService;

@RestController
@RequestMapping("/proveedor")
public class ProveedorController {
	
	@Autowired
	private ProveedorService proveedorService;

	@GetMapping
	public ResponseEntity<List<Proveedor>> listarProveedor() {
		return ResponseEntity.ok(proveedorService.listarProveedor());
	}
	
	//Para guardar y actualizar proveedor
	@PostMapping
	public ResponseEntity<Proveedor> actualizarProveedor(@RequestBody Proveedor proveedor){
		try {
			Proveedor proveedorGuardado = proveedorService.guardarProveedor(proveedor);
			return ResponseEntity.created(new URI("/proveedor/"+proveedorGuardado.getIdProv())).body(proveedorGuardado);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	}	
	
	/*Se creo ya que al eliminar solo se tiene que hacer de a 1 y por id*/
	@DeleteMapping(value="delete/{id}")
	private ResponseEntity<Boolean> eliminarProveedor(@PathVariable("id") Integer id){
		proveedorService.eliminarProveedorPorId(id);
		return ResponseEntity.ok(!(proveedorService.findById(id)!=null));
	}
}
