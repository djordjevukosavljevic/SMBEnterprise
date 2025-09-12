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
    @Column(name="dateCreatedAt", nullable = false)
    @JsonFormat
    private LocalDateTime dateCreatedAt;
    @Column(name="isActive",nullable = false)
    @JsonFormat
    private boolean isActive;

    @Column(name = "isTaken", nullable = false)
    @JsonFormat
    private boolean isTaken;

    public LocalDateTime getDateCreatedAt()
    {
        return dateCreatedAt;
    }

    public boolean getIsTaken()
    {
        return  isTaken;
    }

    public boolean getIsActive(){
        return isActive;
    }
}
