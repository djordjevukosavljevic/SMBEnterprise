package rs.ac.university.gradjevinaAplikacija.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rs.ac.university.gradjevinaAplikacija.Entity.Appointment;
import rs.ac.university.gradjevinaAplikacija.Service.AppointmentService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/appointment")
public class AppointmentController
{
    @Autowired
    private final AppointmentService appointmentService;

    public AppointmentController(AppointmentService appointmentService)
    {
        this.appointmentService = appointmentService;
    }

    @GetMapping
    public List<Appointment> getAllAppointments()
    {
        return appointmentService.getAllAppointments();
    }

    @GetMapping(path = "/{id}")
    public Optional<Appointment> getAppointmentById(@PathVariable Integer id)
    {
        return appointmentService.getAppointmentById(id);
    }

    @PostMapping
    public void createAppointment(@RequestBody Appointment appointment)
    {
        appointmentService.createAppointment(appointment);
    }
}
