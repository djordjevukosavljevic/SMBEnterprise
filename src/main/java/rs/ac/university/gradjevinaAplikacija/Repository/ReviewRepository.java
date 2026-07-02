package rs.ac.university.gradjevinaAplikacija.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.ac.university.gradjevinaAplikacija.Entity.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Integer>
{

}
