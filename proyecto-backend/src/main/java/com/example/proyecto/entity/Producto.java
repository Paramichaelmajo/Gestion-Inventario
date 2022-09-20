package com.example.proyecto.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name="producto")
public class Producto {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "prod_id")
	private Integer prodId;
	
	@Column(name = "prod_cod")
	private String prodCod;
	
	@Column(name = "prod_precio")
	private Integer prodPrecio;
	
	@Column(name = "prod_nombre")
	private String prodNombre;
	
	@ManyToOne//Probando Relaciones
	@JoinColumn(name = "id_prov")
	private Proveedor idProv;
	
	@ManyToOne//Probando Relaciones
	@JoinColumn(name = "tipo_id")
	private Tipo tipoId;
}
