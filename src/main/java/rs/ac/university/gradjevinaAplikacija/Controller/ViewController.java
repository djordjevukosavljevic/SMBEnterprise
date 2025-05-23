package rs.ac.university.gradjevinaAplikacija.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController
{
    @GetMapping("/image-view")
    public String imageView()
    {
        return "image";
    }

    @GetMapping("/appointment-view")
    public String appointmentView()
    {
        return "appointment";
    }

    @GetMapping("/about-view")
    public String aboutView()
    {
        return "about";
    }

    @GetMapping("/services-view")
    public String servciesView()
    {
        return "services";
    }

    @GetMapping("/clients-view")
    public String clientsView()
    {
        return "clients";
    }

    @GetMapping("/contact-view")
    public String contactView()
    {
        return "contact";
    }
}
