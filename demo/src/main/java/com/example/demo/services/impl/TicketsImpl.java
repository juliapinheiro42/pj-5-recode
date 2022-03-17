package com.example.demo.services.impl;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.ExampleMatcher.StringMatcher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.model.entity.Tickets;
import com.example.demo.model.repository.TicketsRepository;
import com.example.demo.models.enums.StatusTickets;
import com.example.demo.services.TicketsService;

@Service
public class TicketsImpl implements TicketsService{

	private TicketsRepository repo;
	
	public TicketsImpl(TicketsRepository repo) {
		this.repo = repo;
	}
	
	@Override
	@Transactional
	public Tickets save(Tickets tickets) {
		return repo.save(tickets);
	}

	@Override
	@Transactional
	public Tickets update(Tickets tickets) {
		Objects.requireNonNull(tickets.getId());
		return repo.save(tickets);
	}

	@Override
	@Transactional
	public void delete(Tickets tickets) {
		Objects.requireNonNull(tickets.getId());
		repo.delete(tickets);
		
	}

	@Override
	@Transactional(readOnly = true)
	public List<Tickets> search(Tickets ticketsFilter) {
		Example example = Example.of(ticketsFilter, ExampleMatcher.matching()
				.withIgnoreCase().withStringMatcher(StringMatcher.CONTAINING));
		return repo.findAll(example);
	}

	@Override
	public void updateStatus(Tickets tickets, StatusTickets status) {
		tickets.setStatus(status);
		update(tickets);
		
	}
	
	   @Override
	    public Optional<Tickets> obterPorId(Long id){
			return repo.findById(id);
	   }

}
