package com.orange.Crisalis;

import com.orange.Crisalis.model.SalableGood;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@RequestMapping("/goods")
public class SalableGoodController {
  @Autowired
  private SalableGoodService salableGoodService;
  @PreAuthorize("hasAnyRole('USER' ,'ADMIN')")
  @GetMapping
  public List<SalableGood> getAllSalableGoods() {
    return salableGoodService.findAll();
  }
  @PreAuthorize("hasAnyRole('USER' ,'ADMIN')")
  @GetMapping("/{id}")
  public SalableGood getSalableGoodById(@PathVariable Long id) throws Exception {
    return salableGoodService.findById(id).orElseThrow(() -> new Exception("Product not found with id: " + id));
  }
  @PreAuthorize("hasRole('ADMIN')")
  @Transactional
  @PostMapping
  public ResponseEntity<SalableGood> createSalableGood(@RequestBody SalableGood salableGood) {
    SalableGood newSalabreGood = salableGoodService.save(salableGood);
    return new ResponseEntity<>(newSalabreGood, HttpStatus.CREATED);
  }
  @PreAuthorize("hasRole('ADMIN')")
  @Transactional
  @PutMapping("/{id}")
  public SalableGood updateSalableGoods(@PathVariable Long id, @RequestBody SalableGood salableGood) throws Exception {
    SalableGood existingSalableGood = salableGoodService.findById(id).orElseThrow(() -> new Exception("Product not found with id: " + id));
    existingSalableGood.setName(salableGood.getName());
    existingSalableGood.setType(salableGood.getType());
    existingSalableGood.setPrice(salableGood.getPrice());
    return salableGoodService.save(existingSalableGood);
  }
  @PreAuthorize("hasRole('ADMIN')")
  @Transactional
  @DeleteMapping("/{id}")
  public void deleteSalableGood(@PathVariable Long id) {
    salableGoodService.deleteById(id);
  }
}
