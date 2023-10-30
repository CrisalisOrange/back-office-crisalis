package com.orange.Crisalis.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.util.Set;

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

    @NotNull
    private String name;

    @NotNull
    private BigDecimal price;

    @NotNull
    @Enumerated(EnumType.STRING)
    private Type type;
}
