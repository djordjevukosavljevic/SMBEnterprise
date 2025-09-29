package rs.ac.university.gradjevinaAplikacija.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
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

    private final JavaMailSender mailSender;


    public AppointmentController(AppointmentService appointmentService, JavaMailSender mailSender)
    {
        this.appointmentService = appointmentService;
        this.mailSender = mailSender;
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

    public void SendMail(Appointment appointment)
    {
        SimpleMailMessage email = new SimpleMailMessage();
        email.setSubject(appointment.getSubject());
        email.setTo("djorjde.vukosavljevic01@gmail.com");
    }


    public String buildAppointmentBody(Appointment a)
    {
        return String.format("""
                Novi zakazan randevu Isotherm Solutions:
                
                Datum i vreme randevu-a: %s
                Ime: %s
                
                """)
    }



}
