package com.flowery.auth_service.controller;

import com.flowery.auth_service.model.dto.LogInRequestDTO;
import com.flowery.auth_service.model.payload.APIResponse;
import com.flowery.auth_service.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @GetMapping("google")
    public String loginGoogle() {
        return "login-google";
    }

    @GetMapping("check-email")
    public ResponseEntity<APIResponse> checkEmail(@RequestParam(required = true) String email) {
        if (authService.isEmailExists(email)) {
            return new ResponseEntity<>(new APIResponse("Email had been used"), HttpStatus.CONFLICT);
        } else {
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

    @PostMapping("login")
    public ResponseEntity<Long> login(@RequestBody LogInRequestDTO logInRequestDTO) {
        Long userId = authService.logIn(logInRequestDTO);
        if (userId == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("register")
    public String register() {
        return "register";
    }

    @GetMapping("verify-email")
    public String verifyEmail() {
        return "verify-email";
    }

    @PostMapping("forgot-password")
    public String forgotPassword() {
        return "forgot-password";
    }

    @PostMapping("reset-password")
    public String resetPassword() {
        return "reset-password";
    }
}
