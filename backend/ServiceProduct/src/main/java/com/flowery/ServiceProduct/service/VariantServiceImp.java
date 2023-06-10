package com.flowery.ServiceProduct.service;

import com.flowery.ServiceProduct.model.dto.VariantDTO;
import com.flowery.ServiceProduct.model.entity.Variant;
import com.flowery.ServiceProduct.repository.VariantRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class VariantServiceImp implements VariantService{
    private final VariantRepository variantRepository;

    @Autowired
    public VariantServiceImp(VariantRepository variantRepository) {
        this.variantRepository = variantRepository;
    }

    @Override
    public Variant createVariant(VariantDTO dto) {
        Variant variant = new Variant();
        BeanUtils.copyProperties(dto, variant);
        return variantRepository.save(variant);
    }



    @Override
    public Variant getVariantId(Long variantId) {
        return variantRepository.findById(variantId)
                .orElseThrow(() -> new RuntimeException("Variant not found"));
    }

    @Override
    public Variant updateVariant(Long variantId, VariantDTO dto) {
        Variant existingVariant = getVariantId(variantId);
        BeanUtils.copyProperties(dto, existingVariant);
        return variantRepository.save(existingVariant);
    }

    @Override
    public void deleteVariant(Long variantId) {
        Variant existingVariant = getVariantId(variantId);
        variantRepository.delete(existingVariant);
    }

    @Override
    public List<VariantDTO> findAll() {
        List<Variant> variants = variantRepository.findAll();
        return mapVariantListToDTOList(variants);
    }

    @Override
    public List<VariantDTO> getProductVariants(Long productId) {
        List<Variant> variants = variantRepository.findByProductId(productId);
        return mapVariantListToDTOList(variants);
    }

    private List<VariantDTO> mapVariantListToDTOList(List<Variant> variants) {
        return variants.stream()
                .map(this::mapVariantToDTO)
                .collect(Collectors.toList());
    }

    private VariantDTO mapVariantToDTO(Variant variant) {
        VariantDTO variantDTO = new VariantDTO();
        BeanUtils.copyProperties(variant, variantDTO);
        return variantDTO;
    }



}
