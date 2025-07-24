package rs.ac.university.gradjevinaAplikacija.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rs.ac.university.gradjevinaAplikacija.Entity.Message;
import rs.ac.university.gradjevinaAplikacija.Repository.MessageRepository;

import java.util.List;
import java.util.Optional;

@Service
public class MessageService
{
    @Autowired
    private final MessageRepository messageRepository;

    public MessageService(MessageRepository messageRepository)
    {
        this.messageRepository = messageRepository;
    }

    public List<Message> getAllMessages()
    {
        return messageRepository.findAll();
    }

    public Optional<Message> getMessageById(Integer id)
    {
        return messageRepository.findById(id);
    }

    public void saveMessage(Message message)
    {
        messageRepository.save(message);
    }

}
