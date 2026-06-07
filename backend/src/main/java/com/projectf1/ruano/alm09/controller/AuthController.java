package com.projectf1.ruano.alm09.controller;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.projectf1.ruano.alm09.dto.LoginRequest;
import com.projectf1.ruano.alm09.dto.LoginResponse;
import com.projectf1.ruano.alm09.model.entity.Alumno;
import com.projectf1.ruano.alm09.model.entity.Catedratico;
import com.projectf1.ruano.alm09.model.repository.AlumnoRepository;
import com.projectf1.ruano.alm09.model.repository.CatedraticoRepository;

@RestController
@CrossOrigin(origins = {"http://localhost:9090", "http://localhost:4200"})
public class AuthController {

    private static final String ADMIN_EMAIL = "admin@admin.com";
    private static final String ADMIN_PASSWORD = "admin123";

    private final AlumnoRepository alumnoRepository;
    private final CatedraticoRepository catedraticoRepository;

    public AuthController(AlumnoRepository alumnoRepository, CatedraticoRepository catedraticoRepository) {
        this.alumnoRepository = alumnoRepository;
        this.catedraticoRepository = catedraticoRepository;
    }

    @PostMapping("login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        if (ADMIN_EMAIL.equals(request.getEmail()) && ADMIN_PASSWORD.equals(request.getPassword())) {
            return ResponseEntity.ok(new LoginResponse("ADMIN", null, "Administrador", "General", ADMIN_EMAIL));
        }

        Optional<Catedratico> catedratico = catedraticoRepository.findByEmailAndPassword(
                request.getEmail(), request.getPassword());
        if (catedratico.isPresent()) {
            Catedratico c = catedratico.get();
            return ResponseEntity.ok(new LoginResponse("CATEDRATICO", c.getId(), c.getNombre(), c.getApellido(), c.getEmail()));
        }

        Optional<Alumno> alumno = alumnoRepository.findByEmailAndPassword(
                request.getEmail(), request.getPassword());
        if (alumno.isPresent()) {
            Alumno a = alumno.get();
            return ResponseEntity.ok(new LoginResponse("ALUMNO", a.getId(), a.getNombre(), a.getApellido(), a.getEmail()));
        }

        return ResponseEntity.status(401).build();
    }
}
