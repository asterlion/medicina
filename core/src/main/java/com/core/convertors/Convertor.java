package com.core.convertors;

import org.modelmapper.ModelMapper;

public abstract class Convertor<T, E> {
    final ModelMapper modelMapper;

    public Convertor() {
        this.modelMapper = new ModelMapper();
    }

    public abstract E convert(T t);
}