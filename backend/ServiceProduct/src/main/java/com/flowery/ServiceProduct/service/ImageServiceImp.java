package com.flowery.ServiceProduct.service;

import com.flowery.ServiceProduct.model.dto.ImageDTO;
import com.flowery.ServiceProduct.model.entity.Image;
import com.flowery.ServiceProduct.repository.ImageRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ImageServiceImp implements ImageService {


    @Autowired
    private ImageRepository imageRepository;

    @Override
    public Image createImage(ImageDTO dto) {
        Image image = new Image();
        BeanUtils.copyProperties(dto, image);
        return imageRepository.save(image);
    }

    @Override
    public Image updateImage(Long imageId, ImageDTO dto) {
        Image image = getImageById(imageId);
        if (image != null) {
            BeanUtils.copyProperties(dto, image);
            return imageRepository.save(image);
        }
        return null;
    }

    @Override
    public Image getImageById(Long imageId) {
        return imageRepository.findById(imageId).orElse(null);
    }

    @Override
    public void deleteImage(Long imageId) {
        Image image = getImageById(imageId);
        if (image != null) {
            imageRepository.delete(image);
        }
    }

    @Override
    public List<ImageDTO> findAll() {
        List<Image> images = imageRepository.findAll();
        return images.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    private ImageDTO convertToDTO(Image image) {
        ImageDTO dto = new ImageDTO();
        dto.setImageId(image.getImageId());
        dto.setImageUrl(image.getImageUrl());
        dto.setProductId(image.getProductId());
        return dto;
    }
}

