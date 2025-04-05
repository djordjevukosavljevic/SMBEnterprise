package rs.ac.university.gradjevinaAplikacija.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity(name="image")
@NoArgsConstructor
@Getter
@Setter
public class    Image
{
    @JsonFormat
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;
    @JsonFormat
    @Column(name="name")
    private String name;
    @JsonFormat
    @Column(name="size")
    private double size;
    @JsonFormat
    @Column(name = "path")
    private String path;
    @JsonFormat
    @Enumerated(EnumType.STRING)
    @Column(name="extns")
    private imgExtens extns;
    public enum imgExtens {JPG, JPEG, PNG}

}
