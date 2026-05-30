package com.ron.backend.controller;

import com.ron.backend.dto.ContactDto;
import com.ron.backend.service.MsgService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class Controller {
    @Autowired
    private MsgService service;

    @PostMapping("/contact")
    public ResponseEntity<?> sendMessage(@Valid @RequestBody ContactDto contactDto) {
        return ResponseEntity.status(200).body(service.handleMessage(contactDto));
    }
}
