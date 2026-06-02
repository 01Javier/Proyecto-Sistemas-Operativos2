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

import com.projectf1.ruano.alm09.model.entity.Catedratico;
import com.projectf1.ruano.alm09.service.CatedraticoService;

@RestController
@CrossOrigin(origins = {"http://localhost:9090","http://localhost:4200"})
public class CatedraticoController {

    @Autowired
    private CatedraticoService catedraticoService;

    // -------------------------------------------------------------------

    @GetMapping("catedraticos")
    public List<Catedratico> getAllCatedraticos() {
        return catedraticoService.getAllCatedraticos();
    }

    // -------------------------------------------------------------------

    @GetMapping("catedraticos_id")
    public Catedratico getCatedraticoByIdRequestParam(@RequestParam("id") Long id) {
        Optional<Catedratico> catedratico = catedraticoService.findById(id);
        return catedratico.orElse(null);
    }

    // -------------------------------------------------------------------

    @GetMapping("catedraticos_id/{id}") 
    public Catedratico getCatedraticoByIdPathVariable(@PathVariable("id") Long id) {
        Optional<Catedratico> catedratico = catedraticoService.findById(id);
        return catedratico.orElse(null);
    }

    // -------------------------------------------------------------------

    @PostMapping("create_catedratico") 
    public Catedratico createCatedratico(@RequestBody Catedratico nuevoCatedratico) {
        if (nuevoCatedratico.getId() != null && catedraticoService.findById(nuevoCatedratico.getId()).isPresent()) {
            return null;
        } else {
            return catedraticoService.save(nuevoCatedratico);
        }
    }

    // -------------------------------------------------------------------

    @PutMapping("update_catedratico/{id}") 
    public Catedratico updateCatedratico(@PathVariable("id") Long id, @RequestBody Catedratico updated) {
        Optional<Catedratico> optional = catedraticoService.findById(id);
        if (optional.isPresent()) {
            Catedratico catedratico = optional.get();
            catedratico.setNombre(updated.getNombre());
            catedratico.setApellido(updated.getApellido());
            catedratico.setEmail(updated.getEmail());
            catedratico.setPassword(updated.getPassword());
            catedratico.setTelefono(updated.getTelefono());
            catedratico.setEdad(updated.getEdad());
            catedratico.setDpi(updated.getDpi());
            return catedraticoService.save(catedratico);
        } else {
            return null;
        }
    }

    // -------------------------------------------------------------------

    @DeleteMapping("delete_catedratico/{id}") 
    public void deleteCatedratico(@PathVariable("id") Long id) {
        Optional<Catedratico> optional = catedraticoService.findById(id);
        optional.ifPresent(catedraticoService::delete);
    }

}
