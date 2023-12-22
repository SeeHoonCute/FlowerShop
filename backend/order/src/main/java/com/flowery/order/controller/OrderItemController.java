package com.flowery.order.controller;

import com.flowery.order.dto.OrderDTO;
import com.flowery.order.dto.OrderItemDTO;
import com.flowery.order.service.OrderItemService;
import org.modelmapper.ModelMapper;
import org.modelmapper.internal.bytebuddy.asm.Advice;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/orders")
public class OrderItemController {
    private OrderItemService orderItemService;
    ModelMapper modelMapper = new ModelMapper();
    public OrderItemController(OrderItemService orderItemService){
        this.orderItemService = orderItemService;
    }

    @GetMapping("/{id}/items")
    public List<OrderItemDTO> getOrderItemById(@PathVariable("id") Long id) {
        return orderItemService.getAllOrderItemByOrderID(id);
    }
    @PostMapping("/{id}")
    public ResponseEntity<OrderItemDTO> createOrderItem(@RequestBody OrderItemDTO orderItemDTO, @PathVariable("id") Long id) {
        OrderItemDTO orderItem1 = orderItemService.createOrderItem(orderItemDTO,id);
        if(orderItem1 !=null){
            return new ResponseEntity<>(orderItem1, HttpStatus.CREATED);
        }
        else{
            return new ResponseEntity<>(HttpStatus.valueOf("ERROR"));
        }
    }
    @PutMapping("/{id}/items/{idItem}")
    public ResponseEntity<OrderItemDTO> updateOrderItem(@RequestBody OrderItemDTO orderItemDTO, @PathVariable("id") Long id,@PathVariable("idItem") Long idItem) throws Exception {
        OrderItemDTO orderItem = orderItemService.updateOrderItem(orderItemDTO, id, idItem);
        if(orderItem !=null){
            return new ResponseEntity<>(orderItem, HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.valueOf("ERROR"));
        }
    }
    @DeleteMapping("/{id}/items/{idItem}")
    public ResponseEntity<Void> deleteOrder(@PathVariable("id") Long id,@PathVariable("idItem") Long idItem) {
        orderItemService.deleteOrderItem(id,idItem);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
