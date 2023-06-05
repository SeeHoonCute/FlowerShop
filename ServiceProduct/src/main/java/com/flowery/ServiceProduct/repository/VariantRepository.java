package com.flowery.ServiceProduct.repository;

import com.flowery.ServiceProduct.model.entity.Variant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface VariantRepository extends JpaRepository<Variant,Long> {
    List<Variant> findByProductId(Long productId);
}
