package com.incubin.sweetspot.entity;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "subject_grade_histories")
public class SubjectGradeHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "student_subject_id")
    private StudentSubject studentSubject;
    private int grade;
    private LocalDate date;
    private LocalDateTime createdAt = LocalDateTime.now();
    // getters and setters
}
