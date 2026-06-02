package com.projectf1.ruano.alm09.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.projectf1.ruano.alm09.model.entity.User;
import com.projectf1.ruano.alm09.model.repository.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return (List<User>) userRepository.findAll();
    }

    public Optional<User> findById(Long par_id) {
        return userRepository.findById(par_id);
    }

    public User save(User par_user) {
        return userRepository.save(par_user);
    }

    public void delete(User par_user) {
        userRepository.delete(par_user);
    }
    
}
