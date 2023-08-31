package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddCategoryDto;
import com.app.entity.NGO;
import com.app.entity.NgoCategory;
import com.app.service.NgoCategoryService;

@RestController
@RequestMapping("/categories")
public class NgoCategoryController {

//    private final NgoCategoryService ngoCategoryService;
//
//    @Autowired
//    public NgoCategoryController(NgoCategoryService ngoCategoryService) {
//        this.ngoCategoryService = ngoCategoryService;
//    }
	@Autowired
	private NgoCategoryService ngoCategoryService;

    @PostMapping("/addcategory")
    public NgoCategory addCategory(@RequestBody AddCategoryDto category) {
        return ngoCategoryService.addCategory(category);
    }

    @GetMapping
    public List<NgoCategory> viewCategoryList() {
        return ngoCategoryService.viewCategoryList();
    }

    @GetMapping("/{categoryId}/ngos")
    public List<NGO> getNgosByCategoryId(@PathVariable Long categoryId) {
        return ngoCategoryService.getNgosByCategoryId(categoryId);
    }
}

