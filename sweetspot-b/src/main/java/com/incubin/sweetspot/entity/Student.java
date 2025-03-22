package com.incubin.sweetspot.entity;

import jakarta.persistence.*;
import org.springframework.data.annotation.Id;

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
    private List<Subject> subjects;
    private LocalDateTime createdAt = LocalDateTime.now();
    // getters and setters
}