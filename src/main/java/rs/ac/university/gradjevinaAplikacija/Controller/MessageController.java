package rs.ac.university.gradjevinaAplikacija.Controller;

import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;
import rs.ac.university.gradjevinaAplikacija.Entity.Message;
import rs.ac.university.gradjevinaAplikacija.Service.MessageService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="/api/message")
public class MessageController
{
    private final JavaMailSender mailSender;

    private final MessageService messageService;

    @Autowired
    public MessageController(MessageService messageService, JavaMailSender mailSender)
    {
        this.messageService = messageService;
        this.mailSender = mailSender;
    }

    @GetMapping
    public List<Message> getAllMessages()
    {
        return messageService.getAllMessages();
    }

    @GetMapping(path="/{id}")
    public Optional<Message> getMessageById(@PathVariable Integer id)
    {
        return messageService.getMessageById(id);
    }
//
    @PostMapping
    public ResponseEntity<String> sendMessage(@RequestBody Message message)
    {

        try
        {
            messageService.saveMessage(message);
            sendMail(message);
            return ResponseEntity.ok("Message sent successfully");
        } catch (Exception e)
        {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to send a message or save message");
        }
    }


    public void sendMail(Message message)
    {
        SimpleMailMessage email = new SimpleMailMessage();
        email.setSubject(message.getSubject());
        email.setTo("djordjevukosavljevic01@gmail.com");
        email.setText(buildEmailBody(message));

        mailSender.send(email);
    }


    public String buildEmailBody(Message m)
    {
        return String.format("""
                Nova poruka sa sajta:
                
                Napravljena: %s %s
                Ime: %s %s
                Prezime: %s %s
                Email: %s
                Contact number: %s
                Title: %s
                
                Message: %s %s %s %s
                """, m.getCreatedAt(),m.getName(),m.getLastname(), m.getEmail(), m.getMobileNumber(), m.getSubject(),m.getMessage()

        );
    }


}
