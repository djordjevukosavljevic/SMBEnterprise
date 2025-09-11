package rs.ac.university.gradjevinaAplikacija.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rs.ac.university.gradjevinaAplikacija.Service.AppointmentService;

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
}
