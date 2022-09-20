package com.example.proyecto.service;

import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.proyecto.entity.Tipo;
import com.example.proyecto.repository.TipoRepository;

import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class TipoService {
	
	@Autowired
	private TipoRepository tipoRepository;
	
	//Creado para buscar los tipos
	public List<Tipo> findAll() {
		return tipoRepository.findAll();
	}
	
	public List<Tipo> findAll(Sort sort){
		return tipoRepository.findAll(sort);	
	}
	
	public Page<Tipo> findAll(Pageable pageable){
		return tipoRepository.findAll(pageable);
	}
}