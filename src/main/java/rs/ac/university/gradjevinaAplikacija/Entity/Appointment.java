package rs.ac.university.gradjevinaAplikacija.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity(name="appointment")
public class Appointment
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonFormat
    @Column(name="id")
    private int id;

    private LocalDateTime dateCreatedAt;

    private boolean isActive;
}
