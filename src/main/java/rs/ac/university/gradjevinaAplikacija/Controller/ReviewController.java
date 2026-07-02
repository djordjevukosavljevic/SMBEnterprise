package rs.ac.university.gradjevinaAplikacija.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.w3c.dom.stylesheets.LinkStyle;
import rs.ac.university.gradjevinaAplikacija.Entity.Review;
import rs.ac.university.gradjevinaAplikacija.Service.ReviewService;

import java.util.List;

@RestController
@RequestMapping(path = "/api/review")

public class ReviewController {
    private final ReviewService reviewService;


    @Autowired
    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @GetMapping
    public List<Review> getAllReviews() {
        return reviewService.findAllReviews();
    }

    @PostMapping
    public void createReview(@RequestBody Review review)
    {
        if(review.getGrade() < 1 || review.getGrade() > 5)
        {
            throw new IllegalArgumentException("Grade must be between 1 and 5");
        }
        reviewService.createReveiw(review);
    }

}