package rs.ac.university.gradjevinaAplikacija.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rs.ac.university.gradjevinaAplikacija.Entity.Appointment;
import rs.ac.university.gradjevinaAplikacija.Service.AppointmentService;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping(path = "api/appointment")
public class AppointmentController
{
    private final AppointmentService service;

    @Autowired
    public AppointmentController(AppointmentService service)
    {
        this.service = service;
    }

    @GetMapping
    public List<Appointment> getAllAppointments()
    {
        return service.getAllAppointments();
    }

    @GetMapping(path="/{id}")
    public Optional<Appointment> getAppointmentById(@PathVariable Integer id)
    {
        return service.findAppointmentById(id);
    }

    @PostMapping
    public void arrangeAppointment(@RequestBody Appointment appointment)
    {
        service.arrangeAppointment(appointment);
    }

    @DeleteMapping(path="/{id}")
    public void deleteAppointmentById(@PathVariable Integer id)
    {
        service.deleteAppointmentById(id);
    }

    @PutMapping(path="/{id}")
    public void updateAppointment(@RequestBody Appointment appointment)
    {
        service.updateAppointment(appointment);
    }

}
