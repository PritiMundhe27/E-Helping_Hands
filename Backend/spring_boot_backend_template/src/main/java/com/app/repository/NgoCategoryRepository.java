package com.app.repository;




import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.NgoCategory;

public interface NgoCategoryRepository extends JpaRepository<NgoCategory, Long> {
    // Add custom query methods if needed
}

