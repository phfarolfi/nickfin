package com.nickfin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "com.nickfin")
@EnableJpaRepositories(basePackages = "com.nickfin.repository")
@EntityScan(basePackages = "com.nickfin.entity")
public class Main {
	public static void main(String[] args) {
		SpringApplication.run(Main.class, args);

		System.out.println("Main started");
	}
}
