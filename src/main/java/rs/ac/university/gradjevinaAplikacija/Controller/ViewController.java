package rs.ac.university.gradjevinaAplikacija.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/pages")
public class ViewController
{
    @GetMapping
    public String vision()
    {
        return "vision";
    }

}
