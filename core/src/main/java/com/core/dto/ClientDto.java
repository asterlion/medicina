package com.core.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ClientDto {
    private Long id;
    private String login;
    private String password;
    private String firstName;
    private String secondName;
    private String lastName;
    private String gender;
    private LocalDate birthDay;
}