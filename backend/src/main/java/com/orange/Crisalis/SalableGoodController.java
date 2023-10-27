package com.orange.Crisalis;

import com.orange.Crisalis.model.SalableGood;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SalableGoodController {
  @Autowired
  private SalableGoodService salableGoodService;

  @GetMapping("/goods")
  public List<SalableGood> getAllItems() {
    return salableGoodService.findAll();
  }

  @GetMapping("/goods/{id}")
  public SalableGood getItemById(@PathVariable Long id) throws Exception {
    return salableGoodService.findById(id).orElseThrow(() -> new Exception("Product not found with id: " + id));
  }

  @PostMapping("/goods")
  public SalableGood createItem(@RequestBody SalableGood salableGood) {
    return salableGoodService.save(salableGood);
  }

  @PutMapping("/goods/{id}")
  public SalableGood updateItem(@PathVariable Long id, @RequestBody SalableGood salableGood) throws Exception {
    SalableGood existingSalableGood = salableGoodService.findById(id).orElseThrow(() -> new Exception("Product not found with id: " + id));
    /* Actulizar el item con los datos nuevos (analizar: puede directamente guardar el item recibido)
    existingItem.setName(product.getName());
    existingItem.setDescription(product.getDescription());
     */
    return salableGoodService.save(existingSalableGood);
  }

  @DeleteMapping("/goods/{id}")
  public void deleteItem(@PathVariable Long id) {
    salableGoodService.deleteById(id);
  }
}
