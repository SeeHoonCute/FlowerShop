package com.flowery.ServiceProduct.controller;

import com.flowery.ServiceProduct.model.ResponseObject;
import com.flowery.ServiceProduct.model.dto.WishlistDTO;
import com.flowery.ServiceProduct.model.entity.Wishlist;
import com.flowery.ServiceProduct.service.WishlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/wishlists")
public class WishlistController {
    @Autowired
    private WishlistService wishlistService;

    @PostMapping
    public ResponseEntity<ResponseObject> addToWishlist(@RequestBody WishlistDTO wishlistDTO) {
        Wishlist wishlist = wishlistService.addToWishlist(wishlistDTO);
        if (wishlist == null) {
            return new ResponseEntity<>(
                    new ResponseObject("failed", "Failed to add to wishlist", ""),
                    HttpStatus.BAD_REQUEST
            );
        }
        return new ResponseEntity<>(
                new ResponseObject("success", "Added to wishlist successfully", wishlist),
                HttpStatus.CREATED
        );
    }

    @DeleteMapping("/{wishlistId}")
    public ResponseEntity<ResponseObject> removeFromWishlist(@PathVariable Long wishlistId) {
        wishlistService.removeFromWishlist(wishlistId);
        return new ResponseEntity<>(
                new ResponseObject("success", "Removed from wishlist successfully", null),
                HttpStatus.NO_CONTENT
        );
    }

    @GetMapping("/{wishlistId}")
    public ResponseEntity<ResponseObject> getWishlistById(@PathVariable Long wishlistId) {
        Wishlist wishlist = wishlistService.getWishlistById(wishlistId);
        if (wishlist == null) {
            return new ResponseEntity<>(
                    new ResponseObject("error", "Wishlist not found", null),
                    HttpStatus.NOT_FOUND
            );
        }
        return new ResponseEntity<>(
                new ResponseObject("success", "Wishlist retrieved successfully", wishlist),
                HttpStatus.OK
        );
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<ResponseObject> getWishlistByUser(@PathVariable Long userId) {
        List<WishlistDTO> wishlistDTOList = wishlistService.getWishlistByUser(userId);
        if (!wishlistDTOList.isEmpty()) {
            return new ResponseEntity<>(
                    new ResponseObject("success", "Wishlist for user retrieved successfully", wishlistDTOList),
                    HttpStatus.OK
            );
        }
        return new ResponseEntity<>(
                new ResponseObject("error", "No wishlist found for user", null),
                HttpStatus.NOT_FOUND
        );
    }
}

