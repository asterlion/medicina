package com.core.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    private Integer quantity;
    @ManyToOne
    private TypeAppointment typeAppointment;
    @ManyToOne
    private Client client;
    @ManyToOne
    private Doctor doctor;
    @CreationTimestamp
    @Column(name = "creation_date")
    private LocalDateTime creationDate;
    @Column(name = "appointment_date")
    private LocalDateTime appointmentDate;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "order")
    List<OrderStatus> statuses = new ArrayList<>();
}