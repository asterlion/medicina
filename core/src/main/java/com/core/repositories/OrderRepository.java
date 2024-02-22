package com.core.repositories;

import com.core.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order,Long> {
    List<Order> findAllByDoctorId(Long doctorId);
    List<Order> findAllByClientId(Long clientId);
}