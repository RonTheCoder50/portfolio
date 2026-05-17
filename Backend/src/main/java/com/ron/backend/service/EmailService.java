package com.ron.backend.service;

import com.ron.backend.dto.ContactDto;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {
    private final JavaMailSender mailSender;

    public void sendEmail(ContactDto msg) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();

        mailMessage.setFrom("rohanwaybhase06@gmail.com");
        mailMessage.setTo("rohanwaybhase06@gmail.com");

        mailMessage.setSubject(
                "New Portfolio message " +
                        msg.getMessage()
        );

        mailMessage.setText(
                "Name: " + msg.getName() + "\n" +
                "Email: " + msg.getEmail() + "\n\n" +
                "Message:\n" + msg.getMessage()
        );

        mailSender.send(mailMessage);
    }

}
