package com.orange.Crisalis.model;
import org.hibernate.annotations.GenericGenerator;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

@Entity
public class ClientEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "id")
    @GenericGenerator(name="id", strategy="native")
    private int id;

    @NotNull
    private boolean beneficiary;

    /*  @OneToMany(mappedBy="client", fetch= FetchType.EAGER)
    Set<Pedidos> pedidos = new HashSet<>();
    ESPERAR A QUE HAGAN PEDIDOS    */

    public ClientEntity() {
    }

    public ClientEntity(boolean beneficiary) {
        this.beneficiary = beneficiary;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public boolean isBeneficiary() {
        return beneficiary;
    }

    public void setBeneficiary(boolean beneficiary) {
        this.beneficiary = beneficiary;
    }
}