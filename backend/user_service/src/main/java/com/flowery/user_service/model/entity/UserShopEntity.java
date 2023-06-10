package com.flowery.user_service.model.entity;

import com.flowery.user_service.model.entity.primary_key.UserShopPK;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="USER_SHOP")
@IdClass(UserShopPK.class)
public class UserShopEntity {
    @Id
    @ManyToOne
    @JoinColumn(nullable = false, name = "user_id")
    private UserEntity userEntity;

    @Id
    @ManyToOne
    @JoinColumn(nullable = false, name = "shop_id")
    private ShopEntity shopEntity;

    @Column(nullable = false, name = "is_owner")
    private Boolean isOwner;

}
