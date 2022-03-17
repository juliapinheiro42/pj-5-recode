package com.example.demo.services;

import com.example.demo.model.entity.User;

public interface UserServices {

	User autenticar(String email, String password);
	
	User saveUser(User user);
	
	void emailValidate(String email);
	
	
}
