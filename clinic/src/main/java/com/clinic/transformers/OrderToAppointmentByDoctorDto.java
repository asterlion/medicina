package com.clinic.transformers;

import com.core.dto.AppointmentByDoctorDto;
import com.core.models.Order;
import org.springframework.stereotype.Component;

@Component
public class OrderToAppointmentByDoctorDto {
    public AppointmentByDoctorDto transform(Order order){
        AppointmentByDoctorDto appointment=new AppointmentByDoctorDto();
        appointment.setStart(order.getAppointmentDate());
        appointment.setEnd(order.getAppointmentDate().plusHours(1));
        if(order.getClient()==null){
            appointment.setTitle("Free time");
        } else {
            appointment.setTitle("Appointment for " + order.getClient().getLogin());
        }
        appointment.setDescription("desc");
        return appointment;

    }
}