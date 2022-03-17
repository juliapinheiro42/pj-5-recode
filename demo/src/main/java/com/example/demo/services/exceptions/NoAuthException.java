package com.example.demo.services.exceptions;

public class NoAuthException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public NoAuthException(String mensagem) {
		super(mensagem);
	}
}
