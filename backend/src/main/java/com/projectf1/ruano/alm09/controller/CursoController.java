package com.projectf1.ruano.alm09.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.projectf1.ruano.alm09.model.entity.Curso;
import com.projectf1.ruano.alm09.service.CursoService;

@RestController
@CrossOrigin(origins = {"http://localhost:9090","http://localhost:4200"})
public class CursoController {

    @Autowired
    private CursoService cursoService;

    // ----------------------------------------------------
    @GetMapping("curso")
    public List<Curso> getAllCursos() {
        return cursoService.getAllCursos();
    }

    // Obtener curso por ID
    @GetMapping("curso_id/{id}")
    public Optional<Curso> getCursoById(@PathVariable Long id) {
        return cursoService.getCursoById(id);
    }

    // -----------------------------------------------------
    @PostMapping("create_curso")
    public Curso createCurso(@RequestBody Curso curso) {
        if (curso.getId() != null) {
            throw new IllegalArgumentException("No se debe enviar ID al crear un curso");
        }
        return cursoService.saveCurso(curso);
    }

    // -----------------------------------------------------
    @PutMapping("update_curso/{id}")
    public Curso updateCurso(@PathVariable Long id, @RequestBody Curso updateCurso) {
        return cursoService.getCursoById(id).map(curso -> {
            curso.setName(updateCurso.getName());
            curso.setCatedratico(updateCurso.getCatedratico());
            curso.setAlumnos(updateCurso.getAlumnos());
            return cursoService.saveCurso(curso);
        }).orElse(null);
    }

    // -----------------------------------------------------
    @GetMapping("curso/catedratico/{id}")
    public List<Curso> getCursosByCatedratico(@PathVariable Long id) {
        return cursoService.getCursosByCatedratico(id);
    }

    // -----------------------------------------------------
    @GetMapping("curso/alumno/{id}")
    public List<Curso> getCursosByAlumno(@PathVariable Long id) {
        return cursoService.getCursosByAlumno(id);
    }

    // -----------------------------------------------------
    @DeleteMapping("delete_curso/{id}")
    public String deleteCurso(@PathVariable Long id) {
        return cursoService.getCursoById(id).map(curso -> {
            cursoService.deleteCurso(curso);
            return "Curso eliminado con ID: " + id;
        }).orElse("No existe curso con ID: " + id);
    }
}
