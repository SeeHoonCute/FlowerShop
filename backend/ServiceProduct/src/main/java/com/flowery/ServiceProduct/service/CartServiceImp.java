package com.flowery.ServiceProduct.service;

import com.flowery.ServiceProduct.model.dto.CartDTO;
import com.flowery.ServiceProduct.model.entity.Cart;
import com.flowery.ServiceProduct.repository.CartRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CartServiceImp implements CartService {
    @Autowired
    private CartRepository cartRepository;

    @Override
    public Cart addToCart(CartDTO cartDTO) {
        Cart cart = new Cart();
        BeanUtils.copyProperties(cartDTO, cart);
        return cartRepository.save(cart);
    }

    @Override
    public void removeFromCart(Long cartId) {
        cartRepository.deleteById(cartId);
    }

    @Override
    public Cart getCartById(Long cartId) {
        return cartRepository.findById(cartId)
                .orElseThrow(() -> new RuntimeException("Cart not found"));
    }

    @Override
    public List<CartDTO> getCartByUser(Long userId) {
        List<Cart> cartList = cartRepository.findByUserId(userId);
        return cartList.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    private CartDTO convertToDTO(Cart cart) {
        CartDTO cartDTO = new CartDTO();
        BeanUtils.copyProperties(cart, cartDTO);
        return cartDTO;
    }
}

