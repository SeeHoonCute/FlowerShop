package com.flowery.user_service.model.mapper;

import com.flowery.user_service.model.dto.UserDTO;
import com.flowery.user_service.model.dto.UserListDTO;
import com.flowery.user_service.model.entity.UserEntity;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {
    private final ModelMapper modelMapper;

    public UserMapper(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public UserListDTO mapToUserListDTO(UserEntity source) {
        return modelMapper.map(source, UserListDTO.class);
    }

    public UserDTO mapToUserDTO(UserEntity source) {
        return modelMapper.map(source, UserDTO.class);
    }

    public UserEntity mapToUserEntity(UserDTO source) {
        return modelMapper.map(source, UserEntity.class);
    }
}
