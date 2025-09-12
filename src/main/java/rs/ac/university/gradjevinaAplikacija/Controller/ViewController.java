package rs.ac.university.gradjevinaAplikacija.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController
{

    @GetMapping
    public String defaultView()
    {
        return "index";
    }

    @GetMapping("/image")
    public String imageView()
    {
        return "image";
    }

    @GetMapping("/about")
    public String aboutView()
    {
        return "about";
    }

    @GetMapping("/services")
    public String servciesView()
    {
        return "services";
    }

    @GetMapping("/clients")
    public String clientsView()
    {
        return "clients";
    }

    @GetMapping("/contact")
    public String contactView()
    {
        return "contact";
    }

    @GetMapping("/appointment")
    public String appointmentsView()
    {
        return "appointment";
    }

}
