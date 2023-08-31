package com.app.service;

import java.util.Collections;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.AddCategoryDto;
import com.app.dto.AddNgoDto;
import com.app.entity.AnonymousDonation;
import com.app.entity.Donation;
import com.app.entity.NGO;
import com.app.entity.NgoCategory;
import com.app.entity.Visitor;
import com.app.repository.AnonymousDonationRepository;
import com.app.repository.DonationRepository;
import com.app.repository.NGORepository;

import net.bytebuddy.dynamic.DynamicType.Builder.FieldDefinition.Optional;

@Service
public class NgoService {
     @Autowired
    private NGORepository ngoRepository;

//    @Autowired
//    public NgoService(NGORepository ngoRepository) {
//        this.ngoRepository = ngoRepository;
//    }
    
    @Autowired
	private ModelMapper mapper;
    
    @Autowired
    private AnonymousDonationRepository adonationRepository;

    public NGO authenticateNgo(String email, String password) {
        return ngoRepository.findByEmailAndPassword(email, password);
    }
    
    
    public NGO addNgo(AddNgoDto ngo) {
    	NGO newNgo=mapper.map(ngo, NGO.class);
        return ngoRepository.save(newNgo);
    }
    

//    public List<Donation> getDonationsOfRegisteredDonorsByNGOId(Long ngoId) {
//        return donationRepository.findByNgoIdAndVisitorIsNotNull(ngoId);
//    }
    
//    public List<Donation> viewDonationsOfRegisteredDonors(Long ngoId) {
//        // Implement your logic to retrieve donations of registered donors for the NGO
//        return ngoRepository.findById(ngoId).getRegisteredDonations();
//    }
//    
//    public List<Donation> getDonationsOfRegisteredDonorsByNGOId(Long ngoId) {
//        java.util.Optional<NGO> ngoOptional = ngoRepository.findById(ngoId);
//        
//        if (ngoOptional.isPresent()) {
//            NGO ngo = ngoOptional.get();
//            return ngo.getRegisteredDonations();
//        }
//        
//        return Collections.emptyList(); // Return empty list if NGO not found
//    }
//    
//// 	View donations of anonymous donors.
//    public List<AnonymousDonation> getDonationsOfAnonymousDonorsByNGOId(Long ngoId) {
//        java.util.Optional<NGO> ngoOptional = ngoRepository.findById(ngoId);
//        
//        if (ngoOptional.isPresent()) {
//            NGO ngo = ngoOptional.get();
//            return ngo.getAnonymousDonations();
//        }
//        
//        return Collections.emptyList(); // Return empty list if NGO not found
//    }

	
    
    
    
//    public List<Donation> viewDonationsOfAnonymousDonors(Long ngoId) {
//        // Implement your logic to retrieve donations of anonymous donors for the NGO
//        return ngoRepository.findById(ngoId).getAnonymousDonations();
//   }
//
//    public List<Donor> viewDonorsList(Long ngoId) {
//        // Implement your logic to retrieve the list of donors for the NGO
//        return ngoRepository.findById(ngoId).getDonorsList();
//    }
}

