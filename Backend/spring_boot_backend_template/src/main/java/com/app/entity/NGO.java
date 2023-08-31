package com.app.entity;




import java.util.List;

import javax.persistence.*;


import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class NGO {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long ngo_id;

    private String contactNo;
    private String email;
    private String location;
    private String ngo_name;
    private String password;

    @ManyToOne
    @JoinColumn(name = "category_id")
    @JsonManagedReference
    private NgoCategory category;

    // Constructors, getters, and setters
    // ...

    public Long getNgo_id() {
        return ngo_id;
    }

    public void setNgo_id(Long ngo_id) {
        this.ngo_id = ngo_id;
    }

    public String getContactNo() {
        return contactNo;
    }

    public void setContactNo(String contactNo) {
        this.contactNo = contactNo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getNgo_name() {
        return ngo_name;
    }

    public void setNgo_name(String ngo_name) {
        this.ngo_name = ngo_name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public NgoCategory getCategory() {
        return category;
    }

    public void setCategory(NgoCategory category) {
        this.category = category;
    }
    @OneToMany(mappedBy = "ngo", fetch = FetchType.LAZY)
    private List<Donation> registeredDonations;
//
//    // getter and setter methods...
//
//    public List<Donation> getRegisteredDonations() {
//        return registeredDonations;
//    }
//    
    @OneToMany(mappedBy = "ngo", fetch = FetchType.LAZY)
    private List<AnonymousDonation> anonymousDonations;
//
//    // getter and setter methods...
//
//    public List<AnonymousDonation> getAnonymousDonations() {
//        return anonymousDonations;
//    }
    
    
}

