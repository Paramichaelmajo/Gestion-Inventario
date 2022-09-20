package com.example.proyecto.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="proveedor")
@Data
public class Proveedor{
	//Se tiene que cambiar a AUTO para que cree de forma incremental, 
	//las primeras veces da error donde empieza desde 1 si ya tiene campos agregados
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id_prov")
	private Integer idProv;
	
	@Column(name="nombre_prov")
	private String nombreProv;
	
	@Column(name="telef_prov")
	private String telefProv;
	
	@Column(name="correo_prov")
	private String correoProv;
	
	@Column(name="dir_prov")
	private String dirProv;
	
	@Column(name="ciudad_prov")
	private String ciudadProv;

}
