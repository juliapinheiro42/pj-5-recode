package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.entity.Tickets;
import com.example.demo.model.repository.TicketsRepository;
import com.example.demo.models.enums.StatusTickets;

public interface TicketsService {

	Tickets save(Tickets tickets);
    Tickets update(Tickets tickets);
    void delete( Tickets tickets);
    List<Tickets> search( Tickets ticketsFilter ); 
    void updateStatus(Tickets tickets, StatusTickets status);
	Optional<Tickets> obterPorId(Long id);
}
