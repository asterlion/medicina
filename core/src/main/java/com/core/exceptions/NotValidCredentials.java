package com.core.exceptions;

import lombok.Data;

import java.util.Date;

@Data
public class NotValidCredentials {
    private int status;
    private String message;
    private Date timeStamp;

    public NotValidCredentials(int status, String message) {
        this.status = status;
        this.message = message;
        this.timeStamp = new Date();
    }
}