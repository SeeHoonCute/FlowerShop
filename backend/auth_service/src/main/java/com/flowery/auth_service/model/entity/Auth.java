package com.flowery.auth_service.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "AUTH",
        indexes = {
                @Index(name = "IDX_AUTH_EMAIL", columnList = "email", unique = true),
                @Index(name = "IDX_AUTH_GOOGLE_ID", columnList = "googleId", unique = true),
                @Index(name = "IDX_AUTH_ROLE", columnList = "role"),
                @Index(name = "IDX_AUTH_STATUS", columnList = "status")
        })
public class
Auth {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "authId")
    private Long authId;

    @Column(name = "userId")
    private Long userId;

    @Column(name = "tokenId")
    private Long tokenId;

    @Column(name = "email")
    private String email;

    @Column(name = "emailVerifiedAt")
    private LocalDateTime emailVerifiedAt;

    @Column(name = "password")
    private String password;

    @Column(name = "googleId")
    private String googleId;

    @Column(name = "role")
    private Role role;

    @Column(name = "status")
    private Status status;

    @OneToOne
    @JoinColumn(name = "tokenId", referencedColumnName = "tokenId", insertable = false, updatable = false)
    private Token token;
}
