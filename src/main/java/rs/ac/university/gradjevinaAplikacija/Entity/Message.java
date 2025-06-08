package rs.ac.university.gradjevinaAplikacija.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity(name="message")
@NoArgsConstructor
@Getter
@Setter
public class Message
{
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonFormat
    private Integer id;

    @Column(name="createdAt", nullable = false)
    @JsonFormat
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name="name", nullable = false)
    @JsonFormat
    private String name;

    @Column(name="lastname", nullable = false)
    @JsonFormat
    private String lastname;

    @Column(name="email", nullable = false)
    @JsonFormat
    private String email;

    @Column(name="mobileNumber", nullable = false)
    @JsonFormat
    private String mobileNumber;

    @Column(name="title", nullable = false)
    @JsonFormat
    private String title;

    @Column(name="message", nullable = false)
    @JsonFormat
    private String message;

}
