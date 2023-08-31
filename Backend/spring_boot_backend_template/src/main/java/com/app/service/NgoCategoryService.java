package com.app.service;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.AddCategoryDto;
import com.app.entity.NGO;
import com.app.entity.NgoCategory;
import com.app.repository.NgoCategoryRepository;

@Service
public class NgoCategoryService {

//    private final NgoCategoryRepository ngoCategoryRepository;
//
//    @Autowired
//    public NgoCategoryService(NgoCategoryRepository ngoCategoryRepository) {
//        this.ngoCategoryRepository = ngoCategoryRepository;
//    }
	@Autowired
	private NgoCategoryRepository ngoCategoryRepository;
	
	@Autowired
	private ModelMapper mapper;

    public NgoCategory addCategory(AddCategoryDto category) {
    	NgoCategory nct=mapper.map(category, NgoCategory.class);
        return ngoCategoryRepository.save(nct);
    }

    public List<NgoCategory> viewCategoryList() {
        return ngoCategoryRepository.findAll();
    }

    public List<NGO> getNgosByCategoryId(Long categoryId) {
        Optional<NgoCategory> categoryOptional = ngoCategoryRepository.findById(categoryId);
        if (categoryOptional.isPresent()) {
            NgoCategory category = categoryOptional.get();
            return category.getNgos();
        }
        return null; // or handle as needed
    }
}

