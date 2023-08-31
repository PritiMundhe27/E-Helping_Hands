package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddCategoryDto;
import com.app.entity.Admin;
import com.app.entity.AnonymousDonation;
import com.app.entity.Donation;
import com.app.entity.LoginRequest;
import com.app.entity.NGO;
import com.app.entity.NgoCategory;
import com.app.service.AdminService;



@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;
//	Admin login to the system
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        Admin admin = adminService.authenticateAdmin(loginRequest.getEmail(), loginRequest.getPassword());
        if (admin != null) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed");
        }
    }
    

//	View the list of all Categories.
    @GetMapping("/categories")
    public ResponseEntity<List<NgoCategory>> getAllCategories() {
        List<NgoCategory> categories = adminService.getAllCategories();
        return ResponseEntity.ok(categories);
    }
    
    //	View the list of all NGO’s.
    
    @GetMapping("/ngos")
    public ResponseEntity<List<NGO>> getAllNgos() {
        List<NGO> ngos = adminService.getAllNgos();
        return ResponseEntity.ok(ngos);
    }
    
    //	Add new NGO.   
    @PostMapping("/ngos")
    public ResponseEntity<NGO> addNgo(@RequestBody NGO newNgo) {
        NGO addedNgo = adminService.addNgo(newNgo);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedNgo);
    }
       
   //	Add new Category.
    @PostMapping("/categories")
    public ResponseEntity<NgoCategory> addCategory(@RequestBody AddCategoryDto category) {
        NgoCategory addedCategory = adminService.addCategory(category);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedCategory);
    }
    
    //View the donations of registered donors.
    @GetMapping("/donations/registered-donors")
    public ResponseEntity<List<Donation>> getDonationsOfRegisteredDonors() {
        List<Donation> donations = adminService.getDonationsOfRegisteredDonors();
        return ResponseEntity.ok(donations);
    }
    
    //View the donations of anonymous donors. 
    @GetMapping("/donations/anonymous-donors")
    public ResponseEntity<List<AnonymousDonation>> getDonationsOfAnonymousDonors() {
        List<AnonymousDonation> donations = adminService.getDonationsOfAnonymousDonors();
        return ResponseEntity.ok(donations);
    }
    
}

