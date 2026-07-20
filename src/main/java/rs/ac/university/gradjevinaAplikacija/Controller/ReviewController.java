package rs.ac.university.gradjevinaAplikacija.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
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
        List<String> forbiddenWords = List.of(
                "cunt",
                "shit",
                "stupid",
                "fuck",
                "cheat",
                "cheater",
                "fraud",
                "rob",
                "robbing",
                "MOTHERFUCKER",
                "bitch",
                "bitches",
                "fool"
        );
        if(review.getGrade() < 1 || review.getGrade() > 5)
        {
            throw new IllegalArgumentException("Grade must be between 1 and 5");
        }

        String comment = review.getComment().toLowerCase();

        for(String word: forbiddenWords)
        {
            if(comment.contains(word))
            {
                throw new IllegalArgumentException("Comment cannot contain bad words");
            }

            if(comment.toString() == "")
            {
                throw new IllegalArgumentException("Comment cannot be blank!");
            }


        }

        reviewService.createReveiw(review);
    }

}