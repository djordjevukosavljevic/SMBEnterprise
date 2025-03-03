package rs.ac.university.gradjevinaAplikacija.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.ac.university.gradjevinaAplikacija.Entity.Image;

@Repository
public interface ImageRepository extends JpaRepository<Image, Integer>
{
    
}
