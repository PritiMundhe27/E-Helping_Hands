package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.AddCategoryDto;
import com.app.entity.Admin;
import com.app.entity.AnonymousDonation;
import com.app.entity.Donation;
import com.app.entity.NGO;
import com.app.entity.NgoCategory;
import com.app.repository.AdminRepository;
import com.app.repository.AnonymousDonationRepository;
import com.app.repository.DonationRepository;
import com.app.repository.NGORepository;
import com.app.repository.NgoCategoryRepository;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;
    
    @Autowired
    private NGORepository ngoRepository;
    
    @Autowired
    private NgoCategoryRepository ngoCategoryRepository;
    
    @Autowired
    private DonationRepository donationRepository;
    
    @Autowired
    private AnonymousDonationRepository adonationRepository;
 
@Autowired
private NgoCategoryService ngocatService;

    public Admin authenticateAdmin(String email, String password) {
        return adminRepository.findByEmailAndPassword(email, password);
    }
    
   
    public List<NgoCategory> getAllCategories() {
        return ngoCategoryRepository.findAll();
}
    public List<NGO> getAllNgos() {
        return ngoRepository.findAll();
    
}
    
    public NgoCategory addCategory(AddCategoryDto category) {
        return ngocatService.addCategory(category);
    }
    
    public List<Donation> getDonationsOfRegisteredDonors() {
        return donationRepository.findByVisitorIsNotNull();
    }
    
    public List<AnonymousDonation> getDonationsOfAnonymousDonors() {
        return adonationRepository.findAll();
    }
    
    public NGO addNgo(NGO newNgo) {
    	System.out.println(newNgo+"before save");
        NGO n= ngoRepository.save(newNgo);
        System.out.println(n+"after save");
        return n;
    }

}



