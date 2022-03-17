package com.example.demo.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.entity.Tickets;


public interface TicketsRepository extends JpaRepository<Tickets, Long> {

}
