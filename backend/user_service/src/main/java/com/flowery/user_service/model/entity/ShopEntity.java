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
@Table(name="SHOP")
public class ShopEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, unique = true, name = "shop_id")
    private Long shopId;

    @Column(nullable = false, name = "shop_name")
    private String shopName;

    @Column(nullable = false, name = "shop_description")
    private String shopDescription;

    @Column(nullable = true, name = "shop_address")
    private String shopAddress;

    @Column(nullable = true, name = "shop_phone")
    private String shopPhone;

    @Column(nullable = false, name = "shop_create_date")
    @CreationTimestamp
    private LocalDateTime shopCreateDate;

    @Column(nullable = true, name = "shop_image_url")
    private String shopImageUrl;

    @Column(nullable = false, name = "status")
    private Status status;

    @Column(nullable = false, name = "shop_bank_number")
    private String shopBankNumber;

    @Column(nullable = false, name = "shop_bank_type")
    private String shopBankType;

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "shopEntity")
    private List<UserShopEntity> userShopEntityList;
}
