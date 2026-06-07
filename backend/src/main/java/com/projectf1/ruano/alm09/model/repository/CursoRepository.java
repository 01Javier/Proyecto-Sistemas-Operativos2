package com.projectf1.ruano.alm09.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projectf1.ruano.alm09.model.entity.Curso;

public interface CursoRepository extends JpaRepository<Curso, Long>{
    List<Curso> findByCatedraticoId(Long catedraticoId);
    List<Curso> findByAlumnosId(Long alumnoId);
}
