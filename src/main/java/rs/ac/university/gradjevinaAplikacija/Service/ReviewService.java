package rs.ac.university.gradjevinaAplikacija.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rs.ac.university.gradjevinaAplikacija.Entity.Review;
import rs.ac.university.gradjevinaAplikacija.Repository.ReviewRepository;

import java.util.List;

@Service
public class ReviewService
{
    private final ReviewRepository reviewRepository;

    @Autowired
    public ReviewService(ReviewRepository reviewRepository)
    {
        this.reviewRepository = reviewRepository;
    }

    public List<Review> findAllReviews()
    {
        return reviewRepository .findAll();
    }
}
