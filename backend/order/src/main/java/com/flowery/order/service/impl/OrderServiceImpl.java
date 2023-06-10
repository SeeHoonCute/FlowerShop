package com.flowery.order.service.impl;
import com.flowery.order.dto.OrderDTO;
import com.flowery.order.entity.OrderEntity;
import com.flowery.order.service.OrderService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.flowery.order.repository.OrderRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
        Optional<OrderEntity> order = orderRepository.findById(id);
        System.out.println(order.get().getOrderID());
        if (order.isPresent()){
            OrderDTO orderDTO = modelMapper.map(order.get(), OrderDTO.class);
            System.out.println(orderDTO);
            return orderDTO;
        }
        return null;
    }

    @Override
    public OrderDTO updateOrder(OrderDTO orderDTO, Long id) {
        Optional<OrderEntity> existingOrder = orderRepository.findById(id);
        if(existingOrder.isPresent()){
            OrderEntity orderEntity = modelMapper.map(orderDTO,OrderEntity.class);
            OrderDTO orderDTO1 = modelMapper.map(orderRepository.save(orderEntity), OrderDTO.class);
            return orderDTO1;
        }
        return null;
    }

    @Override
    public void deleteOrder(Long id) {
        Optional<OrderEntity> order = orderRepository.findById(id);
        if (order.isPresent()) {
            orderRepository.deleteById(id);
        }
    }
}
//import com.flowery.order.dto.OrderDTO;
//import com.flowery.order.dto.OrderItemDTO;
//import com.flowery.order.entity.OrderEntity;
//import com.flowery.order.entity.OrderItemEntity;
//import com.flowery.order.repository.OrderRepository;
//import com.flowery.order.repository.OrderItemRepository;
//import com.flowery.order.service.OrderService;
//import org.modelmapper.ModelMapper;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class OrderServiceImpl implements OrderService {
//    private OrderItemRepository orderItemRepository;
//    private OrderRepository orderRepository;
//    ModelMapper modelMapper = new ModelMapper();
//    @Autowired
//    public OrderServiceImpl(OrderRepository orderRepository, OrderItemRepository orderItemRepository){
//        this.orderRepository = orderRepository;
//        this.orderItemRepository = orderItemRepository;
//    }
//    @Override
//    public List<OrderDTO> getAllOrders() {
//        List<OrderDTO> orderDTO = new ArrayList<>();
//        List<OrderEntity> orderEntityList = orderRepository.findAll();
//            for(OrderEntity order : orderEntityList)
//            {
//                orderDTO.add(modelMapper.map(order, OrderDTO.class));
//            }
//        return orderDTO;
//    }
//
//    @Override
//    public OrderDTO createOrder(OrderDTO orderDTO) {
//        OrderEntity orderEntity = modelMapper.map(orderDTO, OrderEntity.class);
//        orderRepository.save(orderEntity);
//        List<OrderItemDTO> orderItemDTOList = orderDTO.getOrderItemDTOList();
//        for(OrderItemDTO orderItemDTO: orderItemDTOList){
//            orderItemDTO.setOrderID(orderDTO.getOrderID());
//            OrderItemEntity orderItemEntity = modelMapper.map(orderItemDTO, OrderItemEntity.class);
//            orderItemRepository.save(orderItemEntity);
//        }
//        return orderDTO;
//    }
//
//    @Override
//    public OrderDTO getOrder(Long id) {
//        OrderDTO orderDTO = modelMapper.map(orderRepository.findById(id), OrderDTO.class);
//        return orderDTO;
//    }
//
//    @Override
//    public OrderEntity updateOrder(OrderDTO orderDTO, Long id) {
//        Optional<OrderEntity> existingOrder = orderRepository.findById(id);
//        if(existingOrder.isPresent()){
//            orderDTO.setOrderID(id);
//            OrderEntity orderEntity = modelMapper.map(orderDTO,OrderEntity.class);
//            return orderRepository.save(orderEntity);
//        }
//        return null;
//    }
//
//    @Override
//    public void deleteOrder(Long id){
//        Optional<OrderEntity> order = orderRepository.findById(id);
//        if (order.isPresent()) {
//            orderRepository.deleteById(id);
//        }
//    }
//
//    @Override
//    public List<OrderItemDTO> getAllOrderItems() {
//        List<OrderItemEntity> itemList = orderItemRepository.findAll();
//        List<OrderItemDTO> itemDTOList = new ArrayList<>();
//        for(OrderItemEntity item: itemList){
//            OrderItemDTO orderitem = modelMapper.map(item, OrderItemDTO.class);
//            itemDTOList.add(orderitem);
//        }
//        return itemDTOList;
//    }
//
//}