package rs.ac.university.gradjevinaAplikacija.Service;

import org.springframework.stereotype.Service;
import rs.ac.university.gradjevinaAplikacija.Entity.Appointment;
import rs.ac.university.gradjevinaAplikacija.Repository.AppointmentRepository;

import java.util.List;
import java.util.Optional;

@Service
public class   AppointmentService
{
    private final AppointmentRepository repository;

    public AppointmentService(AppointmentRepository repository)
    {
        this.repository = repository;
    }

    public List<Appointment> getAllAppointments()
    {
        return repository.findAll();
    }

    public Optional<Appointment> findAppointmentById(Integer id)
    {
        return repository.findById(id);
    }

    public void arrangeAppointment(Appointment appointment)
    {
        repository.save(appointment);
    }

    public void deleteAppointmentById(Integer id)
    {
        repository.deleteById(id);
    }

}
