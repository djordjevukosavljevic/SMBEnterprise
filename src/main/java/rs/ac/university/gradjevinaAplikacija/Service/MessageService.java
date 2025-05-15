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

    private final MessageRepository repository;

    @Autowired
    public MessageService(MessageRepository repository)
    {
        this.repository = repository;
    }


    public List<Message> getAllMessages()
    {
        return repository.findAll();
    }

    public Optional<Message> findMessageById(Integer id)
    {
        return repository.findById(id);
    }
}
