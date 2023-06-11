package com.flowery.user_service.repository;

import com.flowery.user_service.model.entity.UserLocationEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserLocationRepository extends JpaRepository<UserLocationEntity, Long> {
    List<UserLocationEntity> findByUser_UserId(Long userId);
}
