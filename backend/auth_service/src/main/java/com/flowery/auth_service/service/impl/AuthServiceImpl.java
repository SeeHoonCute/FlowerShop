package com.flowery.auth_service.service.impl;

import com.flowery.auth_service.model.dto.LogInRequestDTO;
import com.flowery.auth_service.model.entity.Auth;
import com.flowery.auth_service.repository.AuthRepository;
import com.flowery.auth_service.service.AuthService;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {
    private final AuthRepository authRepository;

    public AuthServiceImpl(AuthRepository authRepository) {
        this.authRepository = authRepository;
    }

    public boolean isEmailExists(String email) {
        return authRepository.existsByEmail(email);
    }

    public Long logIn(LogInRequestDTO logInRequestDTO) {
        Auth auth = authRepository.findByEmail(logInRequestDTO.getEmail());
        if (auth == null) {
            return null;
        }
        if (BCrypt.checkpw(logInRequestDTO.getPassword(), auth.getPassword())) {
            return auth.getUserId();
        }
        return null;
    }
}
