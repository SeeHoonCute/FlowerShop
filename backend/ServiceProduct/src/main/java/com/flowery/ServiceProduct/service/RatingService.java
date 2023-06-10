package com.flowery.ServiceProduct.service;

import com.flowery.ServiceProduct.model.dto.RatingDTO;
import com.flowery.ServiceProduct.model.entity.Rating;

import java.util.List;

public interface RatingService {
    Rating createRating(RatingDTO dto);

    Rating updateRating(Long ratingId, RatingDTO dto);

    Rating getRatingById(Long ratingId);

    void deleteRating(Long ratingId);

    List<RatingDTO> findAll();
    List<RatingDTO> getRatingsByProduct(Long productId);

}
