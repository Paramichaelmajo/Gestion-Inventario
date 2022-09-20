package com.example.proyecto.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.example.proyecto.entity.Proveedor;
import com.example.proyecto.repository.ProveedorRepository;

import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class ProveedorService {

	@Autowired
	private ProveedorRepository proveedorRepository;

	public List<Proveedor> listarProveedor(){
		return proveedorRepository.findAll();
	}
	
	public List<Proveedor> listarProveedor(Sort sort){
		return proveedorRepository.findAll(sort);
	}
	
	public Page<Proveedor>listarProveedor(Pageable pageable){
		return proveedorRepository.findAll(pageable);
	}
	
	public Proveedor guardarProveedor(Proveedor proveedor) {
		return proveedorRepository.save(proveedor);
	}	
	
	public void actualizarProveedor(Proveedor proveedor) {
		proveedorRepository.save(proveedor);
	}
	
	public Optional<Proveedor> findById(Integer id){
		return proveedorRepository.findById(id);
	}
	
	public void eliminarProveedor(Proveedor proveedor) {
		proveedorRepository.delete(proveedor);
	}
	
	public void eliminarProveedorPorId(Integer id) {
		proveedorRepository.deleteById(id);
	}
}
