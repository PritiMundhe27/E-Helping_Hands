package com.app.entity;

import javax.persistence.*;

@Entity
@Table(name = "visitor")
public class Visitor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long visitor_id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    private String visitor_address;
    private String visitor_contactNo;
    private String visitor_name;

    // Constructors, getters, and setters...

    public Long getVisitor_id() {
        return visitor_id;
    }

    public void setVisitor_id(Long visitor_id) {
        this.visitor_id = visitor_id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getVisitor_address() {
        return visitor_address;
    }

    public void setVisitor_address(String visitor_address) {
        this.visitor_address = visitor_address;
    }

    public String getVisitor_contactNo() {
        return visitor_contactNo;
    }

    public void setVisitor_contactNo(String visitor_contactNo) {
        this.visitor_contactNo = visitor_contactNo;
    }

    public String getVisitor_name() {
        return visitor_name;
    }

    public void setVisitor_name(String visitor_name) {
        this.visitor_name = visitor_name;
    }
}

