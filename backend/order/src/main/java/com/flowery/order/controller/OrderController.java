package com.flowery.order.controller;

import com.flowery.order.dto.OrderDTO;
import com.flowery.order.dto.OrderItemDTO;
import com.flowery.order.service.OrderService;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/orders")
public class OrderController {
    private OrderService orderService;
    ModelMapper modelMapper = new ModelMapper();
    public OrderController(OrderService orderService){
        this.orderService = orderService;
    }
    @GetMapping("/")
    public List<OrderDTO> getAllOrders() {

        return orderService.getAllOrders();
    }
    @GetMapping("/{id}")
    public ResponseEntity<OrderDTO> getOrderById(@PathVariable("id") Long id) throws Exception{
        Optional<OrderDTO> order = Optional.ofNullable(orderService.getOrderByID(id));
        return order.map(value ->new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() ->new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @PostMapping("/")
    public ResponseEntity<OrderDTO> createOrder(@RequestBody OrderDTO orderDTO) throws Exception{
        Optional<OrderDTO> order1 = Optional.ofNullable(orderService.createOrder(orderDTO));
        return order1.map(value ->new ResponseEntity<>(value, HttpStatus.CREATED))
                .orElseGet(() ->new ResponseEntity<>(HttpStatus.valueOf("ERROR")));
    }
    @PutMapping("/{id}")
    public ResponseEntity<OrderDTO> updateOrder(@RequestBody OrderDTO orderDTO, @PathVariable("id") Long id) throws Exception {
        Optional<OrderDTO> order1 = Optional.ofNullable(modelMapper.map(orderService.updateOrder(orderDTO, id), OrderDTO.class));
        return order1.map(value ->new ResponseEntity<>(value,HttpStatus.OK))
                .orElseGet(() ->new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable("id") Long id) {
        orderService.deleteOrder(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
