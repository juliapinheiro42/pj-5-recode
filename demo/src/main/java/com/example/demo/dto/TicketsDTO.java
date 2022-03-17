package com.example.demo.dto;

import java.util.Objects;

public class TicketsDTO {
	private Long id;
	private String name;
	private String price;
	private String status;
	
	
	public TicketsDTO() {
		
	}
	
	
	
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
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
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
		TicketsDTO other = (TicketsDTO) obj;
		return Objects.equals(id, other.id) && Objects.equals(name, other.name) && Objects.equals(price, other.price)
				&& Objects.equals(status, other.status);
	}
	public TicketsDTO(Long id, String name, String price, String status) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.status = status;
	}
	
	
}
