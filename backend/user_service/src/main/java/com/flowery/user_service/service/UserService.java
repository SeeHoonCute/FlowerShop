package com.flowery.user_service.service;

import com.flowery.user_service.model.dto.UserDTO;
import com.flowery.user_service.model.dto.UserListDTO;

import java.util.List;

public interface UserService {
    List<UserListDTO> getAllUsers();
    UserDTO getUserById(Long userId) throws Exception;
    Long createUser(UserDTO userDTO) throws Exception;
    Long updateUser(Long userId, UserDTO userDTO) throws Exception;
    void deleteUser(Long userId) throws Exception;
}
