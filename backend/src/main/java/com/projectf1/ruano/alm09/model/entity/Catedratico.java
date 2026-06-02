package com.projectf1.ruano.alm09.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;

@Table(name = "catedratico")
@Entity
@Data
public class Catedratico {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequence_catedratico")
    @SequenceGenerator(name = "sequence_catedratico", sequenceName = "sequence_catedratico", allocationSize = 1)
    private Long id;
    @Column(nullable = false)
    private String nombre;
    @Column(nullable = false)
    private String apellido;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private String password;
    @Column(nullable = false)
    private String telefono;
    @Column(nullable = false)
    private Integer edad;
    @Column(nullable = false)
    private String dpi;

}
