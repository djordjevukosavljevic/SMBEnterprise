package rs.ac.university.gradjevinaAplikacija.Controller;

import com.fasterxml.jackson.annotation.OptBoolean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rs.ac.university.gradjevinaAplikacija.Entity.Appointment;
import rs.ac.university.gradjevinaAplikacija.Repository.AppointmentRepository;
import rs.ac.university.gradjevinaAplikacija.Service.AppointmentService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/appointment")
public class AppointmentController
{

    @Autowired
    private AppointmentService appointmentService;

    public AppointmentController(AppointmentService appointmentService)
    {
        this.appointmentService = appointmentService;
    }

    @GetMapping
    public List<Appointment> getAll()
    {
        return appointmentService.getAllAppointments();
    }

    @GetMapping(path = "/{id}")
    public Optional<Appointment> findAppointById(@PathVariable Integer id)
    {
        return appointmentService.findAppointmentById(id);
    }

    
}
