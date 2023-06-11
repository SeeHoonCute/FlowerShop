package com.flowery.user_service.model.mapper;

import com.flowery.user_service.model.dto.UserLocationDTO;
import com.flowery.user_service.model.entity.UserLocationEntity;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserLocationMapper {
    private final ModelMapper modelMapper;

    public UserLocationMapper(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public UserLocationDTO mapToUserLocationDTO(UserLocationEntity source) {
        return modelMapper.map(source, UserLocationDTO.class);
    }

    public UserLocationEntity mapToUserLocationEntity(UserLocationDTO source) {
        return modelMapper.map(source, UserLocationEntity.class);
    }
}
