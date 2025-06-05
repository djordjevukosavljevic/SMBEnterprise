package rs.ac.university.gradjevinaAplikacija.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rs.ac.university.gradjevinaAplikacija.Entity.Appointment;
import rs.ac.university.gradjevinaAplikacija.Service.AppointmentService;

import java.util.List;

@RestController
@RequestMapping("/api/appointment")
public class AppointmentController
{

    @Autowired
    private AppointmentService service;

    public AppointmentController(AppointmentService service)
    {
        this.service = service;
    }

    @GetMapping
    public List<Appointment> getAll()
    {
        return service.getAllAppointments();
    }
}
