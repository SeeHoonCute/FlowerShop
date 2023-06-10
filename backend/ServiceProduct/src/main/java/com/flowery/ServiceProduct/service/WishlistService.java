package com.flowery.ServiceProduct.service;

import com.flowery.ServiceProduct.model.dto.WishlistDTO;
import com.flowery.ServiceProduct.model.entity.Wishlist;

import java.util.List;

public interface WishlistService {
    Wishlist addToWishlist(WishlistDTO dto);
    void removeFromWishlist(Long wishlistId);
    Wishlist getWishlistById(Long wishlistId);
    List<WishlistDTO> getWishlistByUser(Long userId);

}
