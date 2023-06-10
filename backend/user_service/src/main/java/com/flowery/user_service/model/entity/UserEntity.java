package com.flowery.user_service.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="USER")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, unique = true, name = "user_id")
    private Long userId;

    @Column(nullable = false, name = "user_name")
    private String userName;

    @Column(nullable = false, name = "email")
    private String email;

    @Column(nullable = false, name = "gender")
    private Gender gender;

    @Column(nullable = false, name = "user_create_date")
    @CreationTimestamp
    private LocalDateTime userCreateDate;

    @Column(name = "user_image_url")
    private String userImageUrl;

    @Column(nullable = false, name = "status")
    private Status status;

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "userEntity")
    private List<UserShopEntity> userShopEntityList;

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "userEntity")
    private List<UserLocationEntity> userLocationEntityList;
}
