package rs.ac.university.gradjevinaAplikacija.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity(name="appointment")
@Getter
@Setter
public class Appointment
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonFormat
    private Integer id;
    @Column(name = "created_at", nullable = false)
    @JsonFormat
    private LocalDateTime createdAt = LocalDateTime.now();
    @Column(name = "updated_at", nullable = false)
    @JsonFormat
    private LocalDateTime updatedAt = LocalDateTime.now();
    @Column(name = "title", nullable = false)
    @JsonFormat
    private String title;
    @Column(name = "name", nullable = false)
    @JsonFormat
    private String name;
    @Column(name = "lastname", nullable = false)
    @JsonFormat
    private String lastname;
    @Column(name = "email", nullable = false)
    @JsonFormat
    private String email;
    @Column(name = "mobilePhone", nullable = false)
    @JsonFormat
    private String mobilePhone;
    @Column(name="message", nullable = false)
    @JsonFormat
    private String message;
}
