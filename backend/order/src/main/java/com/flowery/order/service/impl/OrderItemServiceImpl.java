package com.flowery.order.service.impl;

import com.flowery.order.dto.OrderItemDTO;
import com.flowery.order.entity.OrderItemEntity;
import com.flowery.order.repository.OrderItemRepository;
import com.flowery.order.service.OrderItemService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@Service
public class OrderItemServiceImpl implements OrderItemService {
    private OrderItemRepository orderItemRepository;
    ModelMapper modelMapper = new ModelMapper();

    public OrderItemServiceImpl(OrderItemRepository orderItemRepository) {
        this.orderItemRepository = orderItemRepository;
    }

    @Override
    public List<OrderItemDTO> getAllOrderItemByOrderID(Long id) {
        List<OrderItemDTO> orderItemDTOList = new ArrayList<>();
        List<OrderItemEntity> orderItemEntityList = orderItemRepository.findALlByOrderID(id);
        for(OrderItemEntity orderItem : orderItemEntityList){
            orderItemDTOList.add(modelMapper.map(orderItem, OrderItemDTO.class));
        }
        return orderItemDTOList;
    }

    @Override
    public OrderItemDTO createOrderItem(OrderItemDTO orderItemDTO, Long id) {
        OrderItemEntity orderItem = modelMapper.map(orderItemDTO, OrderItemEntity.class);
        orderItem.setOrderID(id);
        OrderItemDTO orderItemDTO1 = modelMapper.map(orderItemRepository.save(orderItem), OrderItemDTO.class);
        return orderItemDTO1;
    }

//    @Override
//    public OrderItemDTO getOrderItemByID(Long id) {
//        OrderItemDTO orderItemDTO = modelMapper.map(orderItemRepository.findById(id), OrderItemDTO.class);
//        return orderItemDTO;
//    }

    @Override
    public OrderItemDTO updateOrderItem(OrderItemDTO orderItemDTO, Long id, Long idItem) {
        OrderItemEntity existingOrderItem = orderItemRepository.findByOrderIDAndOrderItemID(id, idItem);
        if(existingOrderItem !=null){
            OrderItemEntity orderItem = modelMapper.map(orderItemDTO, OrderItemEntity.class);
            OrderItemDTO orderItemDTO1 = modelMapper.map(orderItemRepository.save(orderItem), OrderItemDTO.class);
            return orderItemDTO1;
        }
        return null;
    }

    @Override
    public void deleteOrderItem(Long id, Long idItem) {
        OrderItemEntity orderItem = orderItemRepository.findByOrderIDAndOrderItemID(id, idItem);
        if (orderItem != null) {
            orderItemRepository.delete(orderItem);
        }
    }
}
