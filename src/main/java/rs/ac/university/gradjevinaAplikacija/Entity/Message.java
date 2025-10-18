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

    @Column(name="subject", nullable = false)
    @JsonFormat
    private String subject;

    @Column(name="message", nullable = false)
    @JsonFormat
    private String message;

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public String getName() {
        return name;
    }

    public String getLastname() {
        return lastname;
    }

    public String getEmail() {
        return email;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public String getSubject() {
        return subject;
    }

    public String getMessage() {
        return message;
    }

}
