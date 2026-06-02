package com.projectf1.ruano.alm09.model.entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;

@Table(name = "curso")
@Entity
@Data
public class Curso {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequence_curso")
    @SequenceGenerator(name = "sequence_curso", sequenceName = "sequence_curso", allocationSize = 1)
    private Long id;
    @Column(nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn(name = "catedratico_id", nullable = false)
    private Catedratico catedratico;

    @ManyToMany
    @JoinTable(name = "curso_alumno", joinColumns = 
    @JoinColumn(name = "curso_id"), inverseJoinColumns = 
    @JoinColumn(name = "alumno_id"))
    private List<Alumno> alumnos;

}
