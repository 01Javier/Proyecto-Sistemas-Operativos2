package com.projectf1.ruano.alm09.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.projectf1.ruano.alm09.model.entity.Curso;
import com.projectf1.ruano.alm09.model.repository.CursoRepository;

@Service
public class CursoService {

    private final CursoRepository cursoRepository;

    public CursoService(CursoRepository cursoRepository) {
        this.cursoRepository = cursoRepository;
    }

    public List<Curso> getAllCursos() {
        return cursoRepository.findAll();
    }

    public Optional<Curso> getCursoById(Long id) {
        return cursoRepository.findById(id);
    }

    public Curso saveCurso(Curso curso) {
        return cursoRepository.save(curso);
    }

    public void deleteCurso(Curso curso) {
        cursoRepository.delete(curso);
    }
}
