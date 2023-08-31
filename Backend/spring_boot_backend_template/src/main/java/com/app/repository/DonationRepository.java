package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Donation;

public interface DonationRepository extends JpaRepository<Donation, Long> {

	List<Donation> findByVisitorIsNotNull();

	

}
