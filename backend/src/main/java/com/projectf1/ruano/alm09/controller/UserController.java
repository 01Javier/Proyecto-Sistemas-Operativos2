package com.projectf1.ruano.alm09.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.projectf1.ruano.alm09.model.entity.User;
import com.projectf1.ruano.alm09.service.UserService;

@RestController
@CrossOrigin(origins = {"http://localhost:9090","http://localhost:4200"})
public class UserController {
    @Autowired
    private UserService userService;

    // -------------------------------------------------------------------

    @GetMapping("users") 
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    // -------------------------------------------------------------------

    @GetMapping("users_id") 
    public User getUserByIdRequestParam(@RequestParam("par_id") Long userId) {
        Optional<User> userOptional = userService.findById(userId);
        return userOptional.orElse(null);
    }

    // -------------------------------------------------------------------

    @GetMapping("users_id/{par_id}") 
    public User getUserByIdPathVariable(@PathVariable("par_id") Long userId) {
        Optional<User> userOptional = userService.findById(userId);
        return userOptional.orElse(null);
    }

    // -------------------------------------------------------------------

    @PostMapping("create_user")
    public User createUser(@RequestBody User par_User) {
        if (par_User.getId() != null && userService.findById(par_User.getId()).isPresent()) {
            return null;
        } else {
            return userService.save(par_User);
        }
    }

    // -------------------------------------------------------------------

    @PutMapping("update_user/{par_id}")
    public User updateUser(@PathVariable("par_id") Long userId, @RequestBody User updatedUser) {
        Optional<User> userOptional = userService.findById(userId);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            user.setNombre(updatedUser.getNombre());
            user.setApellido(updatedUser.getApellido());
            user.setEmail(updatedUser.getEmail());
            user.setPassword(updatedUser.getPassword());
            user.setTelefono(updatedUser.getTelefono());
            return userService.save(user);
        } else {
            return null;
        }
    }

    // -------------------------------------------------------------------

    @PatchMapping("update_partial_user/{par_id}")
    public User partialUpdateUser(@PathVariable Long par_id, @RequestBody Map<String, Object> updates) {
        Optional<User> userOptional = userService.findById(par_id);

        if (userOptional.isPresent()) {
            User user = userOptional.get();

            updates.forEach((key, value) -> {
                switch (key) {
                    case "nombre":
                        user.setNombre((String) value);
                        break;
                    case "apellido":
                        user.setApellido((String) value);
                        break;
                    case "email":
                        user.setEmail((String) value);
                        break;
                    case "password":
                        user.setPassword((String) value);
                        break;
                    case "telefono":
                        user.setTelefono((String) value);
                        break;
                }
            });

            return userService.save(user);
        } else {
            return null;
        }
    }

    // -------------------------------------------------------------------

    @DeleteMapping("delete_user/{id}")
    public void deleteUser(@PathVariable("id") Long userid) {
        Optional<User> userOptional = userService.findById(userid);
        userOptional.ifPresent(userService::delete);
    }

}
