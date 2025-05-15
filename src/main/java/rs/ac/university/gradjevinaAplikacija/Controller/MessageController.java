package rs.ac.university.gradjevinaAplikacija.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rs.ac.university.gradjevinaAplikacija.Entity.Message;
import rs.ac.university.gradjevinaAplikacija.Service.MessageService;

import java.util.List;

@RestController
@RequestMapping("/api/message")
@CrossOrigin
public class MessageController
{
    private final MessageService service;

    @Autowired
    public MessageController(MessageService service)
    {
        this.service = service;
    }

    @GetMapping
    public List<Message> getAllMessages()
    {
        return service.getAllMessages();
    }
}
