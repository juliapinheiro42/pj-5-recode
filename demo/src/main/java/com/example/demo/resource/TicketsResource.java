package com.example.demo.resource;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.TicketsDTO;
import com.example.demo.dto.atualizaStatusDTO;
import com.example.demo.model.entity.Tickets;
import com.example.demo.models.enums.StatusTickets;
import com.example.demo.services.TicketsService;
import com.example.demo.services.exceptions.ValidateException;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/tickets")
public class TicketsResource {

	private TicketsService service;
	
	public TicketsResource(TicketsService service) {
		this.service = service;
	}
	
	@GetMapping
	public ResponseEntity search(
			@RequestParam(value="name", required= false) String name,
			@RequestParam(value="price",  required= false) String price
			) {
		Tickets ticketsFilter = new Tickets();
		ticketsFilter.setName(name);
		ticketsFilter.setPrice(price);
	
		List<Tickets> tickets = service.search(ticketsFilter);
		return ResponseEntity.ok(tickets);
	}
	
	@PostMapping
	public ResponseEntity save (@RequestBody TicketsDTO dto) {
		try {
		Tickets entity = converter(dto);
		entity = service.save(entity);
		return ResponseEntity.ok(entity);
		}
		catch(ValidateException e) {
			return ResponseEntity.badRequest().body(null);		
			}
		
		}
	
	@PutMapping("/{id}")
	public ResponseEntity update(@PathVariable Long id, @RequestBody TicketsDTO dto) {
		return service.obterPorId(id).map( entity ->{
			try {
			Tickets tickets = converter(dto);
			tickets.setId(entity.getId());
			service.update(tickets);
			return ResponseEntity.ok(tickets);
			} catch (Exception e) {
				return ResponseEntity.badRequest().body(null);
			}
			
		}).orElseGet(() -> new ResponseEntity("Passagem não encontrada", HttpStatus.BAD_REQUEST));
		
	}
	
	@PutMapping("/{id}/atualiza-status")
	public ResponseEntity atualizarStatus(@PathVariable("id") Long id,@RequestBody atualizaStatusDTO dto) {
		return service.obterPorId(id).map( entity ->{
			StatusTickets selectedStatus = StatusTickets.valueOf(dto.getStatus());
			if(selectedStatus == null) {
				return ResponseEntity.badRequest().body("Não foi possível atualizar o status da promoção");
			}
			try {
			entity.setStatus(selectedStatus);
			service.update(entity);
			return ResponseEntity.ok(entity);
			} catch (Exception e) {
				return ResponseEntity.badRequest().body(null);
			}
		}).orElseGet(() -> new ResponseEntity("Passagem não encontrada", HttpStatus.BAD_REQUEST));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity delete(@PathVariable("id") Long id) {
		return service.obterPorId(id).map( entity ->{
			service.delete(entity);
			return new ResponseEntity(HttpStatus.NO_CONTENT);
		}).orElseGet(() -> new ResponseEntity("Passagem não encontrada", HttpStatus.BAD_REQUEST));
	}
	
	private Tickets converter(TicketsDTO dto) {
		Tickets tickets = new Tickets();
		tickets.setName(dto.getName());
		tickets.setPrice(dto.getPrice());
		tickets.setStatus(StatusTickets.valueOf(dto.getStatus()));
		
		return tickets;
	}
}
