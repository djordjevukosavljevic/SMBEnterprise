package rs.ac.university.gradjevinaAplikacija.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.UrlResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.ac.university.gradjevinaAplikacija.Entity.Image;
import rs.ac.university.gradjevinaAplikacija.Service.ImageService;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;


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

    @GetMapping
    public List<String> getAllImages() throws IOException {

        Path folder = Paths.get("uploads/images");

        return Files.list(folder)
                .map(path -> path.getFileName().toString())
                .toList();
    }

    @GetMapping("/{filename}")
    public ResponseEntity<Resource> getImageFile(@PathVariable String filename) throws IOException
    {
        Path filePath = Paths.get("uploads/images").resolve(filename);

        Resource resource = new UrlResource(filePath.toUri());

        if(!resource.exists())
        {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok()
                .contentType(MediaType.IMAGE_JPEG)
                .body(resource);
    }


    @DeleteMapping(path="/{id}")
    public void deleteImageById(@PathVariable Integer id)
    {
        service.deleteImageById(id);
    }

}
