package com.orange.Crisalis;

import com.orange.Crisalis.model.BienVendible;
import com.orange.Crisalis.repository.BienVendibleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BienVendibleService {

  @Autowired
  private BienVendibleRepository bienVendibleRepository;

  public List<BienVendible> findAll() {
    return bienVendibleRepository.findAll();
  }

  public Optional<BienVendible> findById(Long id) {
    return bienVendibleRepository.findById(id);
  }

  public BienVendible save(BienVendible bienVendible) {
    return bienVendibleRepository.save(bienVendible);
  }

  public void deleteById(Long id) {
    bienVendibleRepository.deleteById(id);
  }
}
