package com.orange.Crisalis.model;

import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "bien_vendible")
@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BienVendible {
    @Id
    @SequenceGenerator(
            name = "bien_vendible_sequence",
            sequenceName = "bien_vendible_sequence",
            allocationSize = 1,
            initialValue = 0
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "bien_vendible_sequence"
    )
    private Long id;
    private String name;
    private BigDecimal price;

    @Enumerated(EnumType.STRING)
    private Type type;
}
