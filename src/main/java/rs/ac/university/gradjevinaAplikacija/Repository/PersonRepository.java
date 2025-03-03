package rs.ac.university.gradjevinaAplikacija.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import rs.ac.university.gradjevinaAplikacija.Entity.Person;

import java.util.Optional;

@Repository
public interface PersonRepository extends JpaRepository<Person, Integer>
{
    Optional<Person> getPersonByEmail(String email);
}
