package com.flowery.user_service.model.dto;

import lombok.Data;

@Data
public class UserListDTO {
    Long userId;
    String userName;
    String email;
    String gender;
    String status;
}
