package rs.ac.university.gradjevinaAplikacija.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

@Entity
public class Person
{

    @Id
    @JsonFormat
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @JsonFormat
    @Column(name = "name")
    private String name;
    @JsonFormat
    @Column(name = "surrname")
    private String surrname;
    @JsonFormat
    @Column(name = "email")
    private String email;
    @JsonFormat
    @Column(name = "number")
    private String number;

}


