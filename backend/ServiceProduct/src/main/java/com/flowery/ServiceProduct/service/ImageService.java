package com.flowery.ServiceProduct.service;

import com.flowery.ServiceProduct.model.dto.ImageDTO;
import com.flowery.ServiceProduct.model.entity.Image;

import java.util.List;

public interface ImageService {
    Image createImage(ImageDTO dto);

    Image updateImage(Long imageId, ImageDTO dto);

    Image getImageById(Long imageId);

    void deleteImage(Long imageId);

    List<ImageDTO> findAll();

}
