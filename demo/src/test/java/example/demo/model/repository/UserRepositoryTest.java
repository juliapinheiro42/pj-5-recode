package example.demo.model.repository;

import org.junit.Test;
import org.junit.jupiter.api.Assertions;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.example.demo.model.entity.User;
import com.example.demo.model.repository.UserRepository;


@SpringBootTest
@RunWith(SpringRunner.class)
public class UserRepositoryTest {

	@Autowired
	UserRepository repo;
	
	@Test
	public void verificarExistenciadoEmail() {
		
		//cenário
		User user = new User();
		user.setName("Maria");
		user.setEmail("maria123@gmail.com");
		user.setPassword("123123");
		repo.save(user);
		
		//acao/execucao
		boolean result = repo.existsByEmail("maria123@gmail.com");
		
		//verificacao
		Assertions.assertTrue(result);
	}
}
