package ar.unlam.entities;

import javax.persistence.*;

@Entity
public class Person {

	//Columna ID de la tabla
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	//Columna nombre de la tabla
	@Column 
	private String name;
	
	//Columna edad de la tabla
	@Column
	private int age;
	
	//genero los getter and setters de los atributos
	
	public int getId(){
		return id;
	}
	public void setId(int id){
		this.id = id;
	}
	
	public String getName(){
		return name;
	}
	
	public void setName(String name){
		this.name=name;
	}
	
	public int getAge(){
		return age;
	}
	
	public void setAge(int age){
		this.age=age;
	}
	
}
