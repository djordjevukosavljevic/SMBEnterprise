package rs.ac.university.gradjevinaAplikacija.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "review")
@NoArgsConstructor
@Getter
@Setter
public class Review
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    @JsonFormat
    private Integer id;
    @Column(name = "name", nullable = false)
    @JsonFormat
    private String name;
    @Column(name = "comment", nullable = false)
    @JsonFormat
    private String comment;
    @Column(name = "grade", nullable = false)
    @JsonFormat
    private double grade;
    
}
