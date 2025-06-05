package rs.ac.university.gradjevinaAplikacija.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.ac.university.gradjevinaAplikacija.Entity.Appointment;


@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Integer>
{

//    Optional<Appointment> findAppontmentByDateCreatedAt(LocalDateTime createdAt);
}
