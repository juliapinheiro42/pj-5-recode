package com.example.demo.model.entity;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;

import com.example.demo.models.enums.StatusTickets;




@Entity
@Table(name= "tickets")

public class Tickets {

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	
	private String name;
	
	@Column
	private String price;
	
	
	@Column
	@Enumerated(value= EnumType.STRING)
	private StatusTickets status;

	
	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	

	public StatusTickets getStatus() {
		return status;
	}

	public void setStatus(StatusTickets status) {
		this.status = status;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, name, price, status);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Tickets other = (Tickets) obj;
		return Objects.equals(id, other.id) && Objects.equals(name, other.name) && Objects.equals(price, other.price)
				&& status == other.status;
	}

	@Override
	public String toString() {
		return "Tickets [id=" + id + ", name=" + name + ", price=" + price + ", status=" + status
				+ "]";
	}

	
}
