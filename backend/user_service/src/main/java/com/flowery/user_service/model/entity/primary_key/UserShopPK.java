package com.flowery.user_service.model.entity.primary_key;

import jakarta.persistence.Embeddable;
import lombok.Data;

import java.io.Serializable;

@Embeddable
@Data
public class UserShopPK implements Serializable {
    private Long user;
    private Long shop;
}
