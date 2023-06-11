package com.flowery.user_service.model.dto;

import lombok.Data;

@Data
public class UserLocationDTO {
    Long locationId;
    UserDTO user;
    String locationAddress;
    String locationPhone;
}
