package com.example.demo.services.impl;

import java.util.Optional;


import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.model.entity.User;
import com.example.demo.model.repository.UserRepository;
import com.example.demo.services.UserServices;
import com.example.demo.services.exceptions.NoAuthException;
import com.example.demo.services.exceptions.ValidateException;


@Service
public class UserServiceImpl implements UserServices {

	
	
	private UserRepository repo;


	public UserServiceImpl(UserRepository repo) {
		super();
		this.repo = repo;

		
	}

	@Override
	public User autenticar(String email, String password) {
		Optional<User> user = repo.findByEmail(email);
		if(!user.isPresent()) {
			throw new NoAuthException("Usuário não encontrado");
		}
	
			
		
		if(!user.get().getPassword().equals(password)) {
			throw new NoAuthException("Senha incorreta!");
		}
		return user.get();
	}

	@Override
	@Transactional
	public User saveUser(User user) {
		emailValidate(user.getEmail());
		return repo.save(user);
	}

	@Override
	public void emailValidate(String email) {
		boolean exists = repo.existsByEmail(email);
		if(exists) {
			throw new ValidateException("Já existe um usuário cadastrado com este email."); 
		}
	}

}
