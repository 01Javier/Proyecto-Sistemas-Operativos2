package com.projectf1.ruano.alm09.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projectf1.ruano.alm09.model.entity.User;


public interface UserRepository extends JpaRepository<User, Long> {
    java.util.Optional<User> findByEmailAndPassword(String email, String password);
}