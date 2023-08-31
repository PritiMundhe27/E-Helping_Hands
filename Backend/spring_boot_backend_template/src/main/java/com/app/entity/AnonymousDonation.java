package com.app.entity;

import javax.persistence.*;

@Entity
@Table(name = "anonymous_donation")
public class AnonymousDonation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long adonation_id;

    private Double amount;

    @ManyToOne
    @JoinColumn(name = "ngo_id")
    private NGO ngo;

    // Constructors, getters, and setters...

    public Long getAdonation_id() {
        return adonation_id;
    }

    public void setAdonation_id(Long adonation_id) {
        this.adonation_id = adonation_id;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public NGO getNgo() {
        return ngo;
    }

    public void setNgo(NGO ngo) {
        this.ngo = ngo;
    }
}

