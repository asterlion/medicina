package com.core.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "type_appointments")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TypeAppointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "description", nullable = true)
    private String description;
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;
    @OneToMany(mappedBy = "typeAppointment")
    private List<Order> orders = new ArrayList<>();
    @OneToMany(mappedBy = "typeAppointment")
    private List<Doctor> doctors = new ArrayList<>();
}