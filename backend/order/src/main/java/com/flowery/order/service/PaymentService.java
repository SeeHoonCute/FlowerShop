package com.flowery.order.service;

import com.flowery.order.dto.OrderDTO;
import com.flowery.order.dto.PaymentDTO;

import java.util.List;

public interface PaymentService {
//    public List<PaymentDTO> getAllPaymentDTO();

    public PaymentDTO createPaymentDTO(PaymentDTO paymentDTO);

    public PaymentDTO getPaymentDTO(Long id);
}
