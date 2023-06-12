package com.flowery.order.controller;

import com.flowery.order.dto.PaymentDTO;
import com.flowery.order.service.PaymentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payment")
public class PaymentController {
    private PaymentService paymentService;
    public PaymentController(PaymentService paymentService){
        this.paymentService  =paymentService;
    }
    @GetMapping("/{id}")
    public ResponseEntity<PaymentDTO> getPaymentDTO(@PathVariable Long id){
        PaymentDTO paymentDTO = paymentService.getPaymentDTO(id);
        if(paymentDTO != null){
            return new ResponseEntity<>(paymentDTO,HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @PostMapping("")
    public ResponseEntity<PaymentDTO> createPaymentDTO(@RequestBody PaymentDTO paymentDTO){
        PaymentDTO paymentDTO1 = paymentService.createPaymentDTO(paymentDTO);
        if(paymentDTO != null){
            return new ResponseEntity<>(HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
