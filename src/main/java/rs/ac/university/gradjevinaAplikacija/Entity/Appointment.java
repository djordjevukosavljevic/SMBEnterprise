package rs.ac.university.gradjevinaAplikacija.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDateTime;

@Entity(name="appointment")
@NoArgsConstructor
@Getter
@Setter
public class Appointment
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonFormat
    @Column(name="id", nullable = false)
    private Integer id;

    @Column(name = "name", nullable = false)
    @JsonFormat
    private String name;
    @Column(name = "lastname", nullable = false)
    @JsonFormat
    private String lastname;
    @Column(name = "mobile_number", nullable = false)
    @JsonFormat
    private String mobileNumber;
    @Column(name="dateCreatedAt", nullable = false)
    @JsonFormat
    private final LocalDateTime dateCreatedAt = LocalDateTime.now();
    @Column(name="isActive",nullable = false)
    @JsonFormat
    private boolean isActive;
    @Column(name = "isTaken", nullable = false)
    @JsonFormat
    private boolean isTaken;

}
