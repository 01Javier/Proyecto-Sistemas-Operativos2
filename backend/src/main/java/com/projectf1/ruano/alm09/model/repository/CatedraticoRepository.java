package com.projectf1.ruano.alm09.model.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projectf1.ruano.alm09.model.entity.Catedratico;

public interface CatedraticoRepository extends JpaRepository<Catedratico, Long> {
    Optional<Catedratico> findByEmailAndPassword(String email, String password);
}
