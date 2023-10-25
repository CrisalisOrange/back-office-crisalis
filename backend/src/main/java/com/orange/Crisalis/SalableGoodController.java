package com.orange.Crisalis;

import com.orange.Crisalis.model.BienVendible;
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
public class BienVendibleController {
  @Autowired
  private BienVendibleService bienVendibleService;

  @GetMapping("/items")
  public List<BienVendible> getAllItems() {
    return bienVendibleService.findAll();
  }

  @GetMapping("/saludo")
  public String saludo() {
    return "Hola";
  }

  @GetMapping("/items/{id}")
  public BienVendible getItemById(@PathVariable Long id) throws Exception {
    return bienVendibleService.findById(id).orElseThrow(() -> new Exception("Product not found with id: " + id));
  }

  @PostMapping("/items")
  public BienVendible createItem(@RequestBody BienVendible bienVendible) {
    return bienVendibleService.save(bienVendible);
  }

  @PutMapping("/items/{id}")
  public BienVendible updateItem(@PathVariable Long id, @RequestBody BienVendible bienVendible) throws Exception {
    BienVendible existingBienVendible = bienVendibleService.findById(id).orElseThrow(() -> new Exception("Product not found with id: " + id));
    /* Actulizar el item con los datos nuevos (analizar: puede directamente guardar el item recibido)
    existingItem.setName(product.getName());
    existingItem.setDescription(product.getDescription());
     */
    return bienVendibleService.save(existingBienVendible);
  }

  @DeleteMapping("/items/{id}")
  public void deleteItem(@PathVariable Long id) {
    bienVendibleService.deleteById(id);
  }
}
