package rs.ac.university.gradjevinaAplikacija.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rs.ac.university.gradjevinaAplikacija.Entity.Person;
import rs.ac.university.gradjevinaAplikacija.Repository.PersonRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PersonService
{
    private final PersonRepository repository;

    @Autowired
    public PersonService(PersonRepository repository)
    {
        this.repository = repository;
    }

    public List<Person> getAllPersons()
    {
        return repository.findAll();
    }

    public Optional<Person> getPersonById(Integer id)
    {
        return repository.findById(id);
    }

    public Optional<Person> getPersonByEmail(String email)
    {
        return repository.getPersonByEmail(email);
    }

    public void updatePerson(Person person)
    {
        repository.save(person);
    }
}
