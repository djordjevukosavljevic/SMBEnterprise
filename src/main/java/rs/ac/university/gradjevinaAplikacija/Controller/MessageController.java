package rs.ac.university.gradjevinaAplikacija.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rs.ac.university.gradjevinaAplikacija.Entity.Message;
import rs.ac.university.gradjevinaAplikacija.Service.MessageService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="/api/message")
public class MessageController
{
    private final MessageService messageService;

    @Autowired
    public MessageController(MessageService messageService)
    {
        this.messageService = messageService;
    }

    @GetMapping
    public List<Message> getAllMessages()
    {
        return messageService.getAllMessages();
    }

    public Optional<Message> getMessageById(@PathVariable Integer id)
    {
        return messageService.getMessageById(id);
    }

}
