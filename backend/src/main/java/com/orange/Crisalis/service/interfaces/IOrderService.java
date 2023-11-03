package com.orange.Crisalis.service.interfaces;

import com.orange.Crisalis.dto.RequestBodyCreateOrderDTO;
import com.orange.Crisalis.model.OrderEntity;
import com.orange.Crisalis.model.dto.OrderDTO;


import java.util.List;

public interface IOrderService {
    void createOrder(RequestBodyCreateOrderDTO orderCreateBody);
    List<OrderDTO> getOrders();

    void cancelOrder(Long id);

    void editOrder(RequestBodyCreateOrderDTO orderToEdit, Long id);
}