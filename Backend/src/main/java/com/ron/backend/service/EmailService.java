package com.ron.backend.service;

import com.ron.backend.dto.ContactDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.ResponseEntity;

@Service
public class EmailService {

    @Value("${BREVO_API_KEY}")
    private String apiKey;

    @Value("${PERSONAL_EMAIL}")
    private String personalEmail;

    public void sendEmail(ContactDto msg) {

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("api-key", apiKey);

        String body = """
        {
          "sender": {
            "name": "Portfolio Contact Form",
            "email": "%s"
          },
          "to": [
            {
              "email": "%s"
            }
          ],
          "subject": "New Portfolio Message",
          "htmlContent": "<h3>New Contact Message</h3><p><b>Name:</b> %s</p><p><b>Email:</b> %s</p><p><b>Message:</b><br>%s</p>"
        }
        """.formatted(
                personalEmail,
                personalEmail,
                msg.getName(),
                msg.getEmail(),
                msg.getMessage()
        );

        try {
            HttpEntity<String> request = new HttpEntity<>(body, headers);

            ResponseEntity<String> response = restTemplate.postForEntity(
                    "https://api.brevo.com/v3/smtp/email",
                    request,
                    String.class
            );

            System.out.println(response.getBody());
        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}
