package com.flowery.ServiceProduct.controller;

import com.flowery.ServiceProduct.model.ResponseObject;
import com.flowery.ServiceProduct.model.dto.RatingDTO;
import com.flowery.ServiceProduct.model.entity.Rating;
import com.flowery.ServiceProduct.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/ratings")
public class RatingController {
    @Autowired
    private RatingService ratingService;

    @PostMapping
    public ResponseEntity<ResponseObject> createRating(@RequestBody RatingDTO ratingDTO) {
        Rating rating = ratingService.createRating(ratingDTO);
        if (rating == null) {
            return new ResponseEntity<>(
                    new ResponseObject("failed", "Failed to create rating", ""),
                    HttpStatus.BAD_REQUEST
            );
        }
        return new ResponseEntity<>(
                new ResponseObject("success", "Rating created successfully", rating),
                HttpStatus.CREATED
        );
    }

    @PutMapping("/{ratingId}")
    public ResponseEntity<ResponseObject> updateRating(@PathVariable Long ratingId,
                                                       @RequestBody RatingDTO ratingDTO) {
        Rating rating = ratingService.updateRating(ratingId, ratingDTO);
        if (rating == null) {
            return new ResponseEntity<>(
                    new ResponseObject("failed", "Failed to update rating", ""),
                    HttpStatus.NOT_FOUND
            );
        }
        return new ResponseEntity<>(
                new ResponseObject("success", "Rating updated successfully", rating),
                HttpStatus.OK
        );
    }

    @DeleteMapping("/{ratingId}")
    public ResponseEntity<ResponseObject> deleteRating(@PathVariable Long ratingId) {
        ratingService.deleteRating(ratingId);
        return new ResponseEntity<>(
                new ResponseObject("success", "Rating deleted successfully", null),
                HttpStatus.NO_CONTENT
        );
    }

    @GetMapping("/{ratingId}")
    public ResponseEntity<ResponseObject> getRatingById(@PathVariable Long ratingId) {
        Rating rating = ratingService.getRatingById(ratingId);
        if (rating == null) {
            return new ResponseEntity<>(
                    new ResponseObject("error", "Rating not found", null),
                    HttpStatus.NOT_FOUND
            );
        }
        return new ResponseEntity<>(
                new ResponseObject("success", "Rating retrieved successfully", rating),
                HttpStatus.OK
        );
    }

    @GetMapping
    public ResponseEntity<ResponseObject> findAllRatings() {
        List<RatingDTO> ratingDTOList = ratingService.findAll();
        if (!ratingDTOList.isEmpty()) {
            return new ResponseEntity<>(
                    new ResponseObject("success", "All ratings retrieved", ratingDTOList),
                    HttpStatus.OK
            );
        }
        return new ResponseEntity<>(
                new ResponseObject("error", "No ratings found", null),
                HttpStatus.NOT_FOUND
        );
    }


    @GetMapping("/product/{productId}")
    public ResponseEntity<ResponseObject> getRatingsByProduct(@PathVariable Long productId) {
        List<RatingDTO> ratingDTOList = ratingService.getRatingsByProduct(productId);
        if (!ratingDTOList.isEmpty()) {
            return new ResponseEntity<>(
                    new ResponseObject("success", "Ratings for product retrieved successfully", ratingDTOList),
                    HttpStatus.OK
            );
        }
        return new ResponseEntity<>(
                new ResponseObject("error", "No ratings found for product", null),
                HttpStatus.NOT_FOUND
        );
    }

}

