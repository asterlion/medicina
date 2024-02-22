package com.core.repositories;

import com.core.models.TypeAppointment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TypeAppointmentRepository extends JpaRepository<TypeAppointment,Long> {
    Optional<TypeAppointment> findTypeAppointmentByName(String name);
}