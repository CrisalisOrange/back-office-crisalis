package com.orange.Crisalis;

import com.orange.Crisalis.model.SalableGood;
import com.orange.Crisalis.repository.SalableGoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SalableGoodService {

  @Autowired
  private SalableGoodRepository salableGoodRepository;

  public List<SalableGood> findAll() {
    return salableGoodRepository.findAll();
  }

  public Optional<SalableGood> findById(Long id) {
    return salableGoodRepository.findById(id);
  }

  public SalableGood save(SalableGood salableGood) {
    return salableGoodRepository.save(salableGood);
  }

  public void deleteById(Long id) {
    salableGoodRepository.deleteById(id);
  }
}
