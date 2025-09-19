package rs.ac.university.gradjevinaAplikacija.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rs.ac.university.gradjevinaAplikacija.Entity.Appointment;
import rs.ac.university.gradjevinaAplikacija.Repository.AppointmentRepository;

import java.util.List;
import java.util.Optional;

@Service
public class AppointmentService
{
    @Autowired
    private final AppointmentRepository appointmentRepository;

    public AppointmentService(AppointmentRepository appointmentRepository)
    {
        this.appointmentRepository = appointmentRepository;
    }

    public List<Appointment> getAllAppointments()
    {
        return appointmentRepository.findAll();
    }

    public Optional<Appointment> getAppointmentById(Integer id)
    {
        return appointmentRepository.findById(id);
    }

    public void createAppointment(Appointment appointment)
    {
        appointmentRepository.save(appointment);
    }


//    public Optional<Appointment> getAppointmentByDateCreated(LocalDateTime dateCreatedAt)
//    {
//        return appointmentRepository.findByDateCreatedAt(dateCreatedAt);
//    }

}
