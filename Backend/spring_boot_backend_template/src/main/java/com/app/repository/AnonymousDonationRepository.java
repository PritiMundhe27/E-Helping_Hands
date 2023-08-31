package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.AnonymousDonation;

public interface AnonymousDonationRepository extends JpaRepository<AnonymousDonation, Long> {



}
