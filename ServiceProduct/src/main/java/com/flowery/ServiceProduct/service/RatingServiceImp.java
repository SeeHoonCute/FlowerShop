package com.flowery.ServiceProduct.service;

import com.flowery.ServiceProduct.model.dto.RatingDTO;
import com.flowery.ServiceProduct.model.entity.Rating;
import com.flowery.ServiceProduct.repository.RatingRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RatingServiceImp implements RatingService{
    @Autowired
    private RatingRepository ratingRepository;

    @Override
    public Rating createRating(RatingDTO dto) {
        Rating rating = new Rating();
        BeanUtils.copyProperties(dto, rating);
        return ratingRepository.save(rating);
    }


    @Override
    public Rating updateRating(Long ratingId, RatingDTO dto) {
        Rating rating = getRatingById(ratingId);
        if (rating != null) {
            BeanUtils.copyProperties(dto, rating);
            return ratingRepository.save(rating);
        }
        return null;
    }
    @Override
    public void deleteRating(Long ratingId) {
        Rating rating = getRatingById(ratingId);
        if (rating != null) {
            ratingRepository.delete(rating);
        }
    }

    @Override
    public List<RatingDTO> findAll() {
        List<Rating> ratings = ratingRepository.findAll();
        return ratings.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    @Override
    public Rating getRatingById(Long ratingId) {
        return ratingRepository.findById(ratingId).orElse(null);
    }
    @Override
    public List<RatingDTO> getRatingsByProduct(Long productId) {
        List<Rating> ratings = ratingRepository.findByProductId(productId);
        return ratings.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    private RatingDTO convertToDTO(Rating rating) {
        RatingDTO dto = new RatingDTO();
        BeanUtils.copyProperties(rating, dto);
        return dto;
    }
}
