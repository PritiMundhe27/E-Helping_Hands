package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.NGO;

public interface NGORepository extends JpaRepository<NGO, Long> {

	NGO findByEmailAndPassword(String email, String password);
   
}
