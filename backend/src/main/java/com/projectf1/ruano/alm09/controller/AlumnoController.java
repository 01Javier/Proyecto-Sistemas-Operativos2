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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.projectf1.ruano.alm09.model.entity.Alumno;
import com.projectf1.ruano.alm09.service.AlumnoService;

@RestController
@CrossOrigin(origins = {"http://localhost:9090","http://localhost:4200"})
public class AlumnoController {

    @Autowired
    private AlumnoService alumnoService;

    // -------------------------------------------------------------------

    @GetMapping("alumnos")
    public List<Alumno> getAllAlumnos() {
        return alumnoService.getAllAlumnos();
    }

    // -------------------------------------------------------------------

    @GetMapping("alumnos_id") 
    public Alumno getAlumnoByIdRequestParam(@RequestParam("id") Long alumnoId) {
        Optional<Alumno> alumnoOptional = alumnoService.findById(alumnoId);
        return alumnoOptional.orElse(null);
    }

    // -------------------------------------------------------------------

    @GetMapping("alumnos_id/{id}") 
    public Alumno getAlumnoByIdPathVariable(@PathVariable("id") Long alumnoId) {
        Optional<Alumno> alumnoOptional = alumnoService.findById(alumnoId);
        return alumnoOptional.orElse(null);
    }

    // -------------------------------------------------------------------

    @PostMapping("create_alumno") 
    public Alumno createAlumno(@RequestBody Alumno parAlumno) {
        if (parAlumno.getId() != null && alumnoService.findById(parAlumno.getId()).isPresent()) {
            return null;
        } else {
            return alumnoService.save(parAlumno);
        }
    }

    // -------------------------------------------------------------------

    @PutMapping("update_alumno/{id}") 
    public Alumno updateAlumno(@PathVariable("id") Long alumnoId, @RequestBody Alumno updatedAlumno) {
        Optional<Alumno> alumnoOptional = alumnoService.findById(alumnoId);
        if (alumnoOptional.isPresent()) {
            Alumno alumno = alumnoOptional.get();
            alumno.setNombre(updatedAlumno.getNombre());
            alumno.setApellido(updatedAlumno.getApellido());
            alumno.setEmail(updatedAlumno.getEmail());
            alumno.setPassword(updatedAlumno.getPassword());
            alumno.setTelefono(updatedAlumno.getTelefono());
            alumno.setGrado(updatedAlumno.getGrado());
            alumno.setSeccion(updatedAlumno.getSeccion());
            alumno.setEdad(updatedAlumno.getEdad());
            alumno.setCui(updatedAlumno.getCui());
            return alumnoService.save(alumno);
        } else {
            return null;
        }
    }

    // -------------------------------------------------------------------

    @DeleteMapping("delete_alumno/{id}")
    public void deleteAlumno(@PathVariable("id") Long alumnoId) {
        Optional<Alumno> alumnoOptional = alumnoService.findById(alumnoId);
        alumnoOptional.ifPresent(alumnoService::delete);
    }

}
