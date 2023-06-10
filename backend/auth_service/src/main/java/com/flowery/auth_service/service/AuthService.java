package com.flowery.auth_service.service;

import com.flowery.auth_service.model.dto.LogInRequestDTO;

public interface AuthService {
    boolean isEmailExists(String email);
    Long logIn(LogInRequestDTO logInRequestDTO);
}
