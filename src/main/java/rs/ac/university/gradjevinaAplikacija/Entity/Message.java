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
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonFormat
    private int id;
    @Column(name="email", nullable = false)
    @JsonFormat
    private String email;
    @Column(name="text", nullable = false)
    @JsonFormat
    private String text;
    @Column(name="created_at", nullable = false)
    @JsonFormat
    private final LocalDateTime createdAt = LocalDateTime.now();
    @Column(name="isActive", nullable = false)
    @JsonFormat
    private boolean isActive;
}
