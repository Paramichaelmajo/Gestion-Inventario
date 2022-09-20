package com.example.proyecto.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.example.proyecto.entity.Producto;
import com.example.proyecto.repository.ProductoRepository;
import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class ProductoService {
	
	@Autowired
	private ProductoRepository productoRepository;
	
	public List<Producto> listarProductos(){
		return productoRepository.findAll();
	}
	/*Agregado*/
	public List<Producto> listarProductos(Sort sort){
		return productoRepository.findAll(sort);
	}
	/*Agregado*/
	public Page<Producto> listarProductos(Pageable pageable){
		return productoRepository.findAll(pageable);
	}
	
	public void actualizarProducto(Producto producto) {
		productoRepository.save(producto);
	}
	
	public <S extends Producto> S guardarProducto(S entity) {
		return productoRepository.save(entity);
	}
	
	public Optional<Producto> findById(Integer id){
		return productoRepository.findById(id);
	}
	
	public void eliminarProducto(Producto producto) {
		productoRepository.delete(producto);
	}
	
	public void eliminarProductoPorId(Integer id) {
		productoRepository.deleteById(id);
	}
	
}
