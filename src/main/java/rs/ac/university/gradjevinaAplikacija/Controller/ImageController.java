package rs.ac.university.gradjevinaAplikacija.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rs.ac.university.gradjevinaAplikacija.Entity.Image;
import rs.ac.university.gradjevinaAplikacija.Service.ImageService;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping(path ="/api/image")
public class ImageController
{
    private final ImageService service;

    @Autowired
    public ImageController(ImageService service)
    {
        this.service = service;
    }

    @GetMapping
    public List<Image> getAllImages()
    {
        return service.getAllImages();
    }

    @GetMapping(path = "/{id}")
    public Optional<Image> getImageById(@PathVariable Integer id)
    {
        return service.findImageById(id);
    }

    @PostMapping
    public void uploadImage(@RequestBody Image image)
    {
        service.uploadImage(image);
    }


}
