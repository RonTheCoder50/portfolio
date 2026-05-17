package com.ron.backend.service;

import com.ron.backend.dto.ContactDto;
import com.ron.backend.entity.ContactMessage;
import com.ron.backend.repository.MsgRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

@Service
public class MsgService {
    @Autowired
    private MsgRepository msgRepo;

    @Autowired
    private EmailService emailService;

    public String handleMessage(ContactDto contactDto) {
        try {
            ContactMessage msg = new ContactMessage();
            msg.setName(contactDto.getName());
            msg.setEmail(contactDto.getEmail());
            msg.setMessage(contactDto.getMessage());
            msg.setCreatedAt(LocalDateTime.now());

            ContactMessage m = msgRepo.save(msg);
            emailService.sendEmail(contactDto);
            return "Message sent successfully ";
        } catch(Exception ex) {
            throw new RuntimeException(ex.getMessage());
        }
    }
}
