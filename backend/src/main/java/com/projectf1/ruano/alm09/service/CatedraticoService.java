package com.projectf1.ruano.alm09.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.projectf1.ruano.alm09.model.entity.Catedratico;
import com.projectf1.ruano.alm09.model.repository.CatedraticoRepository;

@Service
public class CatedraticoService {

    private final CatedraticoRepository catedraticoRepository;

    public CatedraticoService(CatedraticoRepository catedraticoRepository) {
        this.catedraticoRepository = catedraticoRepository;
    }

    public List<Catedratico> getAllCatedraticos() {
        return (List<Catedratico>) catedraticoRepository.findAll();
    }

    public Optional<Catedratico> findById(Long id) {
        return catedraticoRepository.findById(id);
    }

    public Catedratico save(Catedratico catedratico) {
        return catedraticoRepository.save(catedratico);
    }

    public void delete(Catedratico catedratico) {
        catedraticoRepository.delete(catedratico);
    }
}
