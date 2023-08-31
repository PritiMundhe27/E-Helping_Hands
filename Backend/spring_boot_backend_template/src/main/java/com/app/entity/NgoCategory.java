package com.app.entity;



import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonBackReference;


@Entity
public class NgoCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long category_id;

    private String category_name;

  

    // Constructors, getters, and setters
    public NgoCategory() {
		
   	}
    public NgoCategory(String category_name) {
        this.category_name = category_name;
    }
    @OneToMany(mappedBy = "category",fetch = FetchType.EAGER)
    @JsonBackReference
    @Transient
    private List<NGO> ngos= new ArrayList<NGO>();
    

    public NgoCategory(Long category_id, String category_name, List<NGO> ngos) {
		super();
		this.category_id = category_id;
		this.category_name = category_name;
		this.ngos = ngos;
	}
	public List<NGO> getNgos() {
        return ngos;
    }

   

	public void setNgos(List<NGO> ngos) {
        this.ngos = ngos;
    }

    public Long getCategory_id() {
        return category_id;
    }

    public void setCategory_id(Long category_id) {
        this.category_id = category_id;
    }

    public String getCategory_name() {
        return category_name;
    }

    public void setCategory_name(String category_name) {
        this.category_name = category_name;
    }

	
}


