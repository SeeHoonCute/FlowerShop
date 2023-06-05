package com.flowery.ServiceProduct.service;

import com.flowery.ServiceProduct.model.dto.WishlistDTO;
import com.flowery.ServiceProduct.model.entity.Wishlist;
import com.flowery.ServiceProduct.repository.WishlistRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class WishlistServiceImp implements WishlistService {
    @Autowired
    private WishlistRepository wishlistRepository;

    @Override
    public Wishlist addToWishlist(WishlistDTO dto) {
        Wishlist wishlist = new Wishlist();
        BeanUtils.copyProperties(dto, wishlist);
        return wishlistRepository.save(wishlist);
    }
    @Override
    public void removeFromWishlist(Long wishlistId) {
        Wishlist wishlist = getWishlistById(wishlistId);
        if (wishlist != null) {
            wishlistRepository.delete(wishlist);
        }
    }
    @Override
    public Wishlist getWishlistById(Long wishlistId) {
        return wishlistRepository.findById(wishlistId).orElse(null);
    }
    @Override
    public List<WishlistDTO> getWishlistByUser(Long userId) {
        List<Wishlist> wishlist = wishlistRepository.findByUserId(userId);
        return wishlist.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    private WishlistDTO convertToDTO(Wishlist wishlist) {
        WishlistDTO dto = new WishlistDTO();
        BeanUtils.copyProperties(wishlist, dto);
        return dto;
    }
}

