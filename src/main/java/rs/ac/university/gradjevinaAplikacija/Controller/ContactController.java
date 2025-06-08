package rs.ac.university.gradjevinaAplikacija.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rs.ac.university.gradjevinaAplikacija.Entity.Message;

@RestController
@RequestMapping(path = "/api/contact")
public class ContactController
{
    private final JavaMailSender mailSender;

    @Autowired
    public ContactController(JavaMailSender mailSender)
    {
        this.mailSender = mailSender;
    }

    public ResponseEntity<String> sendMessage(@RequestBody Message message)
    {
        try
        {
            sendEmail(message);
            return ResponseEntity.ok("Message sent successfully.");
        } catch (Exception ex)
        {
            System.out.println("Failed to send message!");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to send a message");
        }
    }

    private void sendEmail(Message message)
    {
        SimpleMailMessage email = new SimpleMailMessage();
        email.setTo("djordje.vukosavljevic01@gmail.com");
        email.setSubject("Subject: " + message.getSubject());
        email.setText(buildEmailBody(message));
//      email.setFrom("noreply@mydomain"); this need to be done as soon as I publish it

        mailSender.send(email);
    }

    private String buildEmailBody(Message m) {
        return String.format("""
                New contact form message:
                
                Created: %s %s
                
                Name: %s %s
                Lastname: %s %s
                Email: %s
                Contact Number: %s
                Subject: %s
                
                Message:
                %s
                """,
                m.getCreatedAt(), m.getName(), m.getLastname(), m.getEmail(), m.getMobileNumber(), m.getSubject(), m.getMessage());
    }
}
