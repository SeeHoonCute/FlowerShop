package com.flowery.user_service.service;

import com.flowery.user_service.model.dto.UserLocationDTO;

import java.util.List;

public interface LocationService {
    Long addLocation(Long userId, UserLocationDTO userLocationDTO);
    List<UserLocationDTO> getLocations(Long userId);
}
