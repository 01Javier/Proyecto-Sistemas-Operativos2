package com.projectf1.ruano.alm09.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projectf1.ruano.alm09.model.entity.Alumno;

public interface AlumnoRepository extends JpaRepository<Alumno, Long>{
    
}
