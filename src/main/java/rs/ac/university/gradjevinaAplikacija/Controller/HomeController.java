package rs.ac.university.gradjevinaAplikacija.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
    
@Controller
@RequestMapping(path="/api/index")
public class HomeController
{

    @GetMapping
    public String defaultView(){
        return "index";
    }
}
