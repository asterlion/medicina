package com.client.transformers;

import com.client.dtos.MyAppointmentsDto;
import com.core.models.Order;
import org.springframework.stereotype.Component;

@Component
public class OrderToMyAppointmentDtoTransformer {
    public MyAppointmentsDto transform(Order order){
        MyAppointmentsDto myAppointments = new MyAppointmentsDto();
        myAppointments.setTypeAppointment(order.getTypeAppointment().getName());
        myAppointments.setTime(order.getAppointmentDate());
        myAppointments.setStatus(order.getStatuses().get(0).getTypeOrderStatus().toString());
        myAppointments.setDoctorName(order.getDoctor().getLastName());
        return myAppointments;
    }
}