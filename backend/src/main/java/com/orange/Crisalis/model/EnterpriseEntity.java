package com.orange.Crisalis.model;

import com.orange.Crisalis.model.ClientEntity;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Entity
public class EnterpriseEntity extends ClientEntity {

    @NotNull
    private String businessName;
    @NotNull
    private String cuit;
    @NotNull
    private LocalDate date;

/*    private PersonEntity personEntity;    */

    public EnterpriseEntity() {
    }

    public EnterpriseEntity(int id, boolean beneficiary, String businessName, String cuit, LocalDate date) {
        super(id, beneficiary);
        this.businessName = businessName;
        this.cuit = cuit;
        this.date = date;
    }

    public String getBusinessName() {
        return businessName;
    }

    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }

    public String getCuit() {
        return cuit;
    }

    public void setCuit(String cuit) {
        this.cuit = cuit;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
