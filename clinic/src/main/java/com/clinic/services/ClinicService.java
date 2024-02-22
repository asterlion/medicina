package com.clinic.services;

import com.core.models.User;
import com.core.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClinicService {
    private final UserRepository userRepository;

    public ClinicService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

}
