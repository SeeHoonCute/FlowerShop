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
@Table(name = "TOKEN")
public class Token {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column(name = "tokenId")
    private Long tokenId;

    @Column(name = "token")
    private String token;

    @Column(name = "expireDate")
    private LocalDateTime expireDate;
}
