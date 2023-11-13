package com.orange.Crisalis.service.interfaces;

import com.orange.Crisalis.model.*;


import java.util.List;

public interface ICalculationEngine {
   static Double priceWithTaxes(SellableGood sellableGood){

       final double BASE_PRICE = sellableGood.getPrice().doubleValue();

       double priceSell = BASE_PRICE;

       double taxSum = sellableGood.getTaxes()
               .stream()
               .mapToDouble(Tax::getTaxPercentage)
               .sum();

       if(taxSum == 0){
           return priceSell;
       }
       

       priceSell += (BASE_PRICE * taxSum) / 100;


       return priceSell;
   }

   static List<OrderDetail> generateDiscount (List<OrderDetail> orderDetailList){
        final double TOTAL_DISCOUNT = 2500;
        final int DISCOUNT_PERCENTAGE = 10;
        double availableDiscount = TOTAL_DISCOUNT;

        for(OrderDetail detail : orderDetailList){
            if(availableDiscount <= 0){
                detail.setDiscount(.0);
                continue;
            }
            if(detail.getSellableGood().getType() != Type.SERVICE){
                double discount = (detail.getPriceSell() * DISCOUNT_PERCENTAGE / 100)* detail.getQuantity();
                detail.setDiscount( Math.min(discount,availableDiscount) );
                availableDiscount -= discount;
            }

        }
        return orderDetailList;
   }

   static Double generateDiscount(OrderEntity order){
       return order.getOrderDetailList().stream().mapToDouble(OrderDetail::getDiscount).sum();
   }

   static Double generateSubTotal(OrderDetail detail){
        return detail.getQuantity() * detail.getPriceSell();
   }
   static Double generateSubTotal(OrderEntity order){
       return order.getOrderDetailList()
               .stream()
               .mapToDouble(detail ->
                       detail.getPriceSell () * detail.getQuantity())
               .sum();
   }

   static Double generateSubTotalWithDiscount(OrderDetail detail){
       return (detail.getQuantity() * detail.getPriceSell())- detail.getDiscount();
   }

   static Double totalOrderPrice(OrderEntity order){
       return generateSubTotal(order) - generateDiscount(order);
   }

}
