package com.incubin.sweetspot.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private int grade;

    @OneToMany(mappedBy = "student")
    private List<StudentSubject> studentSubjects;

    private LocalDateTime createdAt = LocalDateTime.now();

    // Getters and setters
}
