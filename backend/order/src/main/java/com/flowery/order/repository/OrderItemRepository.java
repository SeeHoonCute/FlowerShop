package com.flowery.order.repository;

import com.flowery.order.entity.OrderItemEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderItemRepository extends JpaRepository<OrderItemEntity,Long> {
    List<OrderItemEntity> findALlByOrderID(Long orderID);
    OrderItemEntity findByOrderIDAndOrderItemID(Long orderID, Long orderItemID);
}
