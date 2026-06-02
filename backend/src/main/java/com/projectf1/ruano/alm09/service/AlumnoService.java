package com.projectf1.ruano.alm09.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.projectf1.ruano.alm09.model.entity.Alumno;
import com.projectf1.ruano.alm09.model.repository.AlumnoRepository;

@Service
public class AlumnoService {

    private final AlumnoRepository alumnoRepository;

    public AlumnoService(AlumnoRepository alumnoRepository) {
        this.alumnoRepository = alumnoRepository;
    }

    public List<Alumno> getAllAlumnos() {
        return (List<Alumno>) alumnoRepository.findAll();
    }

    public Optional<Alumno> findById(Long id) {
        return alumnoRepository.findById(id);
    }

    public Alumno save(Alumno alumno) {
        return alumnoRepository.save(alumno);
    }

    public void delete(Alumno alumno) {
        alumnoRepository.delete(alumno);
    }
}
