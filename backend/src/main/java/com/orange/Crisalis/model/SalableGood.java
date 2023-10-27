package com.orange.Crisalis.model;

import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "salable_good")
@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SalableGood {
    @Id
    @SequenceGenerator(
            name = "salable_good_sequence",
            sequenceName = "salable_good_sequence",
            allocationSize = 1,
            initialValue = 0
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "salable_good_sequence"
    )
    private Long id;
    private String name;
    private BigDecimal price;

    @Enumerated(EnumType.STRING)
    private Type type;
}
