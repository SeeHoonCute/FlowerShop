package com.flowery.user_service.service.impl;

import com.flowery.user_service.model.dto.UserDTO;
import com.flowery.user_service.model.dto.UserListDTO;
import com.flowery.user_service.model.entity.Status;
import com.flowery.user_service.model.entity.UserEntity;
import com.flowery.user_service.model.mapper.UserMapper;
import com.flowery.user_service.repository.UserRepository;
import com.flowery.user_service.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    private final UserMapper userMapper;

    public UserServiceImpl(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    public List<UserListDTO> getAllUsers() {
        List<UserEntity> userEntities = userRepository.findAll();
        return userEntities.stream()
                .map(userMapper::mapToUserListDTO)
                .collect(Collectors.toList());
    }

    public UserDTO getUserById(Long userId) throws Exception {
        return userRepository.findById(userId)
                .map(userMapper::mapToUserDTO)
                .orElseThrow(() -> new Exception("User not found"));
    }

    public Long createUser(UserDTO userDTO) throws Exception {
        UserEntity userEntity = userMapper.mapToUserEntity(userDTO);
        userEntity.setStatus(Status.ACTIVE);
        UserEntity savedUserEntity = userRepository.save(userEntity);
        return savedUserEntity.getUserId();
    }

    public Long updateUser(Long userId, UserDTO userDTO) throws Exception {
        UserEntity userEntity = userRepository.findById(userId)
                .orElseThrow(() -> new Exception("User not found"));
        userEntity.setUserName(userDTO.getUserName());
        userEntity.setUserImageUrl(userDTO.getUserImageUrl());
        userEntity.setGender(userDTO.getGender());
        userEntity.setEmail(userDTO.getEmail());
        UserEntity savedUserEntity = userRepository.save(userEntity);
        return savedUserEntity.getUserId();
    }

    public void deleteUser(Long userId) throws Exception {
        UserEntity userEntity = userRepository.findById(userId)
                .orElseThrow(() -> new Exception("User not found"));
        userRepository.delete(userEntity);
    }
}
