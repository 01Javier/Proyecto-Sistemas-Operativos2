package com.projectf1.ruano.alm09.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginResponse {
    private String role;
    private Long id;
    private String nombre;
    private String apellido;
    private String email;
}
