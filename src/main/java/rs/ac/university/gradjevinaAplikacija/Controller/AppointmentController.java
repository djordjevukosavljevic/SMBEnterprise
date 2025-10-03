package rs.ac.university.gradjevinaAplikacija.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<String> createAppointment(@RequestBody Appointment appointment)
    {
        appointmentService.createAppointment(appointment);
        try{
            sendAppointment(appointment);
            return  ResponseEntity.ok("Termin za randevu uspesno zakazan. Potvrdu podataka i termina dobicete putem e-mail adrese, hvala.");
        } catch (Error e)
        {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Neuspesno zakazivanje termina randevu-a.");
        }
    }

    public void sendAppointment(Appointment appointment)
    {
        SimpleMailMessage email = new SimpleMailMessage();
        email.setSubject(appointment.getSubject());
        email.setTo("djordje.vukosavljevic01@gmail.com");
        email.setCc("katarinavukosavljevic94@gmail.com");
        email.setText(buildAppointmentBody(appointment));

        mailSender.send(email);
    }


    public String buildAppointmentBody(Appointment a)
    {
        return String.format("""
                Novi zakazan randevu sa sajta:
                
                Datum i vreme randevu-a: %s
                Ime: %s
                Prezime: %s
                Email: %s
                Contact number: %s
                Title: %s
                
                Message: %s
                """, a.getDateCreatedAt(), a.getName(), a.getLastname(), a.getEmail(), a.getMobileNumber(), a.getSubject(), a.getMessage());
    }



}
