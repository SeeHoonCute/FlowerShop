package com.flowery.ServiceProduct.controller;

import com.flowery.ServiceProduct.model.ResponseObject;
import com.flowery.ServiceProduct.model.dto.ImageDTO;
import com.flowery.ServiceProduct.model.entity.Image;
import com.flowery.ServiceProduct.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/images")
public class ImageController {
    @Autowired
    private ImageService imageService;

    @PostMapping
    public ResponseEntity<ResponseObject> createImage(@RequestBody ImageDTO imageDTO) {
        Image image = imageService.createImage(imageDTO);
        if (image == null) {
            return new ResponseEntity<>(
                    new ResponseObject("failed", "Failed to create image", ""),
                    HttpStatus.BAD_REQUEST
            );
        }
        return new ResponseEntity<>(
                new ResponseObject("success", "Image created successfully", image),
                HttpStatus.CREATED
        );
    }

    @PutMapping("/{imageId}")
    public ResponseEntity<ResponseObject> updateImage(@PathVariable Long imageId,
                                                      @RequestBody ImageDTO imageDTO) {
        Image image = imageService.updateImage(imageId, imageDTO);
        if (image == null) {
            return new ResponseEntity<>(
                    new ResponseObject("failed", "Failed to update image", ""),
                    HttpStatus.NOT_FOUND
            );
        }
        return new ResponseEntity<>(
                new ResponseObject("success", "Image updated successfully", image),
                HttpStatus.OK
        );
    }

    @DeleteMapping("/{imageId}")
    public ResponseEntity<ResponseObject> deleteImage(@PathVariable Long imageId) {
        imageService.deleteImage(imageId);
        return new ResponseEntity<>(
                new ResponseObject("success", "Image deleted successfully", null),
                HttpStatus.NO_CONTENT
        );
    }

    @GetMapping("/{imageId}")
    public ResponseEntity<ResponseObject> getImageById(@PathVariable Long imageId) {
        Image image = imageService.getImageById(imageId);
        if (image == null) {
            return new ResponseEntity<>(
                    new ResponseObject("error", "Image not found", null),
                    HttpStatus.NOT_FOUND
            );
        }
        return new ResponseEntity<>(
                new ResponseObject("success", "Image retrieved successfully", image),
                HttpStatus.OK
        );
    }

    @GetMapping
    public ResponseEntity<ResponseObject> findAll() {
        List<ImageDTO> imageDTOList = imageService.findAll();
        if (!imageDTOList.isEmpty()) {
            return new ResponseEntity<>(
                    new ResponseObject("success", "All images retrieved", imageDTOList),
                    HttpStatus.OK
            );
        }
        return new ResponseEntity<>(
                new ResponseObject("error", "No images found", null),
                HttpStatus.NOT_FOUND
        );
    }

}
