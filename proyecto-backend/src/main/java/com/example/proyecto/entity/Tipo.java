package com.example.proyecto.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="tipo")
@Data
public class Tipo{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="tipo_id")
	private Integer tipoId;
	
	@Column(name="descripcion")
	private String descripcion;
}
