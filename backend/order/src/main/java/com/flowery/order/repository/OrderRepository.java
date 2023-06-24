package com.flowery.order.repository;

import com.flowery.order.entity.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<OrderEntity,Long> {
    List<OrderEntity> findAllByCustomerID(Long userID);
    List<OrderEntity> findAllByShopID(Long shopID);
    OrderEntity findByOrderID(Long orderID);
}
