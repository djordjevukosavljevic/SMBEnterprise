package rs.ac.university.gradjevinaAplikacija.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rs.ac.university.gradjevinaAplikacija.Entity.Image;
import rs.ac.university.gradjevinaAplikacija.Service.ImageService;
import java.util.List;
import java.util.Optional;


@CrossOrigin
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

    @PostMapping
    public void uploadImage(@RequestBody Image image)
    {
        service.uploadImage(image);
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

    @PutMapping(path="/{id}")
    public void changeImage(@RequestBody Image image)
    {
        service.updateImage(image);
    }

    @DeleteMapping(path="/{id}")
    public void deleteImageById(@PathVariable Integer id)
    {
        service.deleteImageById(id);
    }
}
