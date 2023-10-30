package com.orange.Crisalis.model;
import com.orange.Crisalis.model.ClientEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

@Entity
public class PersonEntity extends ClientEntity {

    @NotNull
    @Column(unique = true)
    private String lastName;
    @NotNull
    @Column(unique = true)
    private String firstName;
    @NotNull
    @Column(unique = true)
    private String dni;
    private boolean isActive;

    public PersonEntity() {
    }

    public PersonEntity(boolean beneficiary, String lastName, String firstName, String dni, boolean isActive) {
        super(beneficiary);
        this.lastName = lastName;
        this.firstName = firstName;
        this.dni = dni;
        this.isActive = isActive;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }
}