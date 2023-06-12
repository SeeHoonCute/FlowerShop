package com.flowery.user_service.service.impl;

import com.flowery.user_service.model.dto.UserDTO;
import com.flowery.user_service.model.dto.UserLocationDTO;
import com.flowery.user_service.model.entity.UserLocationEntity;
import com.flowery.user_service.model.mapper.UserLocationMapper;
import com.flowery.user_service.model.mapper.UserMapper;
import com.flowery.user_service.repository.UserLocationRepository;
import com.flowery.user_service.service.LocationService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LocationServiceImpl implements LocationService {
    private final UserLocationRepository userLocationRepository;
    private final UserLocationMapper userLocationMapper;
    private final UserMapper userMapper;

    public LocationServiceImpl(UserLocationRepository userLocationRepository, UserLocationMapper userLocationMapper, UserMapper userMapper) {
        this.userLocationRepository = userLocationRepository;
        this.userLocationMapper = userLocationMapper;
        this.userMapper = userMapper;
    }

    public Long addLocation(Long userId, UserLocationDTO userLocationDTO) {
        userLocationDTO.setUser(new UserDTO());
        userLocationDTO.getUser().setUserId(userId);
        UserLocationEntity userLocationEntity = userLocationMapper.mapToUserLocationEntity(userLocationDTO);
        userLocationEntity.setUser(userMapper.mapToUserEntity(userLocationDTO.getUser()));
        UserLocationEntity savedUserLocationEntity = userLocationRepository.save(userLocationEntity);
        return savedUserLocationEntity.getLocationId();
    }

    public List<UserLocationDTO> getLocations(Long userId) {
        List<UserLocationEntity> userLocationEntities = userLocationRepository.findByUser_UserId(userId);
        return userLocationEntities.stream()
                .map(userLocationMapper::mapToUserLocationDTO)
                .collect(Collectors.toList());
    }
}
