package com.clinic.services.impl;

import com.clinic.dto.AppointmentDto;
import com.clinic.services.AppointmentClinicService;
import com.clinic.transformers.OrderToAppointmentByDoctorDto;
import com.core.dto.AppointmentByDoctorDto;
import com.core.enums.TypeOrderStatus;
import com.core.models.Doctor;
import com.core.models.Order;
import com.core.models.OrderStatus;
import com.core.repositories.DoctorRepository;
import com.core.repositories.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AppointmentClinicServiceImpl implements AppointmentClinicService {
    private final DoctorRepository doctorRepository;
    private final OrderRepository orderRepository;
    private final OrderToAppointmentByDoctorDto orderToAppointmentByDoctorDto;
    @Override
    public void addAppointment(AppointmentDto appointment) {
        Doctor doctor = doctorRepository.findById(appointment.getDoctorId()).orElseThrow();
        Order order =new Order();
        order.setQuantity(1);
        order.setDoctor(doctor);
        order.setTypeAppointment(doctor.getTypeAppointment());
        order.setAppointmentDate(appointment.getDate());
        OrderStatus orderStatus=new OrderStatus();
        orderStatus.setOrder(order);
        orderStatus.setTypeOrderStatus(TypeOrderStatus.NEW);
        List<OrderStatus> orderStatuses=new ArrayList<>();
        orderStatuses.add(orderStatus);
        order.setStatuses(orderStatuses);
        orderRepository.save(order);
    }

    @Override
    public List<AppointmentByDoctorDto> getAppointmentDoctorList(Long id) {
        List<Order> orders = orderRepository.findAll();
        return   orders.stream()
                .filter(order -> order.getDoctor().getId().equals(id))
                .map(orderToAppointmentByDoctorDto::transform)
                .toList();
    }
}