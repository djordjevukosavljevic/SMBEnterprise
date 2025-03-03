package rs.ac.university.gradjevinaAplikacija.Entity;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity(name="appointment")
@Getter
@Setter
public class Appointment
{
    @JsonFormat
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int id;

    // Used annotations in order to successfully serialize datetime fields
    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss[.SSS][.SS][.S]", shape = JsonFormat.Shape.STRING)
    @Column(name = "createdAt", nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    // Used annotations in order to successfully serialize datetime fields
    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss[.SSS][.SS][.S]", shape = JsonFormat.Shape.STRING)
    @Column(name = "updatedAt", nullable = false)
    private LocalDateTime updatetAt = LocalDateTime.now();
    @JsonFormat
    @Column(name = "message", nullable = false)
    private String message;
    @JsonFormat
    @Column(name="is_active", nullable = false)
    private boolean isActive;
}
