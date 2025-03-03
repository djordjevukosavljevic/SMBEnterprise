package rs.ac.university.gradjevinaAplikacija.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rs.ac.university.gradjevinaAplikacija.Entity.Person;
import rs.ac.university.gradjevinaAplikacija.Service.PersonService;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/person")
@CrossOrigin
public class PersonController
{
    private final PersonService service;

    @Autowired
    public PersonController(PersonService service)
    {
        this.service = service;
    }

    @GetMapping
    public List<Person> getAllPersons()
    {
        return service.getAllPersons();
    }

    @GetMapping(path = "/{id}")
    public Optional<Person> getPersonById(@PathVariable Integer id)
    {
        return service.getPersonById(id);
    }

    @GetMapping(path = "/email/{email}")
    public Optional<Person> getPersonByEmail(@PathVariable String email)
    {
        return service.getPersonByEmail(email);
    }

    @PutMapping(path="/{id}")
    public void updatePerson(@RequestBody Person person)
    {
        service.updatePerson(person);
    }


}
