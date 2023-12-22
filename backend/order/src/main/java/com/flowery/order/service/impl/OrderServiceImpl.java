package com.flowery.order.service.impl;
import com.flowery.order.dto.OrderDTO;
import com.flowery.order.entity.OrderEntity;
import com.flowery.order.service.OrderService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import com.flowery.order.repository.OrderRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {
    private OrderRepository orderRepository;
    ModelMapper modelMapper = new ModelMapper();

    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public List<OrderDTO> getAllOrders() {
        List<OrderDTO> orderDTO = new ArrayList<>();
        List<OrderEntity> orderEntityList = orderRepository.findAll();
        for(OrderEntity order : orderEntityList)
        {
            orderDTO.add(modelMapper.map(order, OrderDTO.class));
        }
        return orderDTO;
    }

    @Override
    public OrderDTO createOrder(OrderDTO orderDTO) {
        OrderEntity orderEntity = modelMapper.map(orderDTO, OrderEntity.class);
        OrderDTO orderDTO1 = modelMapper.map(orderRepository.save(orderEntity), OrderDTO.class);
        return orderDTO1;
    }

    @Override
    public OrderDTO getOrderByID(Long id) {
        OrderEntity order = orderRepository.findByOrderID(id);
        if (order != null){
            OrderDTO orderDTO = modelMapper.map(order, OrderDTO.class);
            return orderDTO;
        }
        return null;
    }

    @Override
    public List<OrderDTO> getOrderByUserID(Long userID) {
        List<OrderDTO>orderDTOList = new ArrayList<>();
        List<OrderEntity> orders = orderRepository.findAllByCustomerID(userID);
        for(OrderEntity order : orders) {
            orderDTOList.add(modelMapper.map(order, OrderDTO.class));
        }
        if (orderDTOList != null){
            return orderDTOList;
        }
        else{
            return null;
        }
    }

    @Override
    public List<OrderDTO> getOrderByShopID(Long shopID) {
        List<OrderDTO>orderDTOList = new ArrayList<>();
        List<OrderEntity> orders = orderRepository.findAllByShopID(shopID);
        for(OrderEntity order : orders) {
            orderDTOList.add(modelMapper.map(order, OrderDTO.class));
        }
        if (orderDTOList != null){
            return orderDTOList;
        }
        else{
            return null;
        }
    }

    @Override
    public OrderDTO updateOrder(OrderDTO orderDTO, Long id) {
        OrderEntity existingOrder = orderRepository.findByOrderID(id);
        if(existingOrder != null){
            orderDTO.setOrderID(existingOrder.getOrderID());
            OrderEntity orderEntity = modelMapper.map(orderDTO,OrderEntity.class);
            OrderDTO orderDTO1 = modelMapper.map(orderRepository.save(orderEntity), OrderDTO.class);
            return orderDTO1;
        }
        return null;
    }

    @Override
    public void deleteOrder(Long id) {
        OrderEntity order = orderRepository.findByOrderID(id);
        if (order !=null) {
            orderRepository.deleteById(id);
        }
    }
}
