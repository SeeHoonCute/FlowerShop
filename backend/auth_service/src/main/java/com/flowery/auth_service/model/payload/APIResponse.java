package com.flowery.auth_service.model.payload;

import lombok.Data;

@Data
public class APIResponse {
    private String message;
    private Object data;

    public APIResponse(String message) {
        this.message = message;
    }

    public APIResponse(String message, Object data) {
        this.message = message;
        this.data = data;
    }
}
