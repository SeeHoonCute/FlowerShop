package com.flowery.user_service.model.dto;

import com.flowery.user_service.model.entity.Gender;
import lombok.Data;

@Data
public class UserDTO {
    Long userId;
    String userGoogleId;
    String userName;
    String email;
    Gender gender;
    String userImageUrl;
}
