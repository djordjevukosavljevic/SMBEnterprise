package rs.ac.university.gradjevinaAplikacija.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rs.ac.university.gradjevinaAplikacija.Entity.Appointment;
import rs.ac.university.gradjevinaAplikacija.Repository.AppointmentRepository;

import java.util.List;

@Service
public class AppointmentService
{
    private AppointmentRepository repository;

    @Autowired
    public AppointmentService(AppointmentRepository repository)
    {
        this.repository = repository;
    }

    public List<Appointment> getAllAppointments()
    {
        return repository.findAll();
    }
}
