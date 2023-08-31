package com.app.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.dto.AddCategoryDto;
import com.app.dto.AddNgoDto;
import com.app.entity.AnonymousDonation;
import com.app.entity.Donation;
import com.app.entity.LoginRequest;
import com.app.entity.NGO;
import com.app.entity.NgoCategory;
import com.app.entity.Visitor;
import com.app.service.NgoService;


@RestController
@RequestMapping("/ngo")
public class NgoController {

    private final NgoService ngoService;

    @Autowired
    public NgoController(NgoService ngoService) {
        this.ngoService = ngoService;
    }
//	NGO can login to the system.
    @PostMapping("/login")
    public ResponseEntity<NGO> login(@RequestBody LoginRequest loginRequest) {
        NGO ngo = ngoService.authenticateNgo(loginRequest.getEmail(), loginRequest.getPassword());
        if (ngo != null) {
            return ResponseEntity.ok(ngo);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }
    
    @PostMapping("/addngo")
    public NGO addNgo(@RequestBody AddNgoDto ngo) {
        return ngoService.addNgo(ngo);
    }
    
    
    
    
//    //	View donations of registered donors.
//    @GetMapping("/{ngoId}/donations/registered-donors")
//    public ResponseEntity<List<Donation>> getDonationsOfRegisteredDonors(
//            @PathVariable Long ngoId) {
//        List<Donation> donations = ngoService.getDonationsOfRegisteredDonorsByNGOId(ngoId);
//        return ResponseEntity.ok(donations);
//    }
//    
//    //	View donations of anonymous donors.
//    @GetMapping("/{ngoId}/donations/anonymous-donors")
//    public ResponseEntity<List<AnonymousDonation>> getDonationsOfAnonymousDonors(
//            @PathVariable Long ngoId) {
//        List<AnonymousDonation> adonations = ngoService.getDonationsOfAnonymousDonorsByNGOId(ngoId);
//        return ResponseEntity.ok(adonations);
//    }
    
    

}

