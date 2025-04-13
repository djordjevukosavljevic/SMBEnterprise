package rs.ac.university.gradjevinaAplikacija.Service;

import org.springframework.stereotype.Service;
import rs.ac.university.gradjevinaAplikacija.Entity.Image;
import rs.ac.university.gradjevinaAplikacija.Repository.ImageRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ImageService
{
    private final ImageRepository repository;

    public ImageService(ImageRepository repository)
    {
        this.repository = repository;
    }

    public void uploadImage(Image image)
    {
        repository.save(image);
    }

    public List<Image> getAllImages()
    {
        return repository.findAll();
    }

    public Optional<Image> findImageById(Integer id)
    {
        return repository.findById(id);
    }

    public void updateImage(Image image)
    {
        repository.save(image);
    }

    public void deleteImageById(Integer id)
    {
        repository.deleteById(id);
    }
}
