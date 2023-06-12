package com.flowery.order.service.impl;

import com.flowery.order.dto.PaymentDTO;
import com.flowery.order.entity.PaymentEntity;
import com.flowery.order.repository.PaymentRepository;
import com.flowery.order.service.PaymentService;
import org.modelmapper.ModelMapper;

import java.util.Optional;

public class PaymentServiceImpl implements PaymentService {
    PaymentRepository paymentRepository;
    ModelMapper modelMapper = new ModelMapper();
    public PaymentServiceImpl(PaymentRepository paymentRepository){
        this.paymentRepository = paymentRepository;
    }
    @Override
    public PaymentDTO createPaymentDTO(PaymentDTO paymentDTO) {
        PaymentEntity paymentEntity = modelMapper.map(paymentDTO, PaymentEntity.class);
        paymentRepository.save(paymentEntity);
        PaymentDTO paymentDTO1 = modelMapper.map(paymentEntity, PaymentDTO.class);;
        return paymentDTO1;
    }

    @Override
    public PaymentDTO getPaymentDTO(Long id) {
        Optional<PaymentEntity> payment = paymentRepository.findById(id);
        if(payment.isPresent()){
            PaymentDTO paymentDTO = modelMapper.map(payment, PaymentDTO.class);
            return paymentDTO;
        }
        else{
            return null;
        }
    }
}
