package com.flowery.ServiceProduct.service;

import com.flowery.ServiceProduct.model.dto.CartDTO;
import com.flowery.ServiceProduct.model.entity.Cart;

import java.util.List;

public interface CartService {
    Cart addToCart(CartDTO cartDTO);

    void removeFromCart(Long cartId);

    Cart getCartById(Long cartId);

    List<CartDTO> getCartByUser(String userId);
}
