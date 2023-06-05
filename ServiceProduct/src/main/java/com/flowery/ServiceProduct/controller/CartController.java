package com.flowery.ServiceProduct.controller;

import com.flowery.ServiceProduct.model.ResponseObject;
import com.flowery.ServiceProduct.model.dto.CartDTO;
import com.flowery.ServiceProduct.model.entity.Cart;
import com.flowery.ServiceProduct.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/carts")
public class CartController {
    @Autowired
    private CartService cartService;

    @PostMapping
    public ResponseEntity<ResponseObject> addToCart(@RequestBody CartDTO cartDTO) {
        Cart cart = cartService.addToCart(cartDTO);
        if (cart == null) {
            return new ResponseEntity<>(
                    new ResponseObject("failed", "Failed to add to cart", null),
                    HttpStatus.BAD_REQUEST
            );
        }
        return new ResponseEntity<>(
                new ResponseObject("success", "Added to cart successfully", cart),
                HttpStatus.CREATED
        );
    }

    @DeleteMapping("/{cartId}")
    public ResponseEntity<ResponseObject> removeFromCart(@PathVariable Long cartId) {
        cartService.removeFromCart(cartId);
        return new ResponseEntity<>(
                new ResponseObject("success", "Removed from cart successfully", null),
                HttpStatus.NO_CONTENT
        );
    }

    @GetMapping("/{cartId}")
    public ResponseEntity<ResponseObject> getCartById(@PathVariable Long cartId) {
        Cart cart = cartService.getCartById(cartId);
        return new ResponseEntity<>(
                new ResponseObject("success", "Cart retrieved successfully", cart),
                HttpStatus.OK
        );
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<ResponseObject> getCartByUser(@PathVariable String userId) {
        List<CartDTO> cartDTOList = cartService.getCartByUser(userId);
        if (!cartDTOList.isEmpty()) {
            return new ResponseEntity<>(
                    new ResponseObject("success", "Cart for user retrieved successfully", cartDTOList),
                    HttpStatus.OK
            );
        }
        return new ResponseEntity<>(
                new ResponseObject("error", "No cart found for user", null),
                HttpStatus.NOT_FOUND
        );
    }
}