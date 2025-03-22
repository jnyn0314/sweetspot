package com.incubin.sweetspot.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "yearly_plans")
public class YearlyPlan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "student_subject_id")
    private StudentSubject studentSubject;
    private int year;
    private String planDetails;
    private LocalDateTime createdAt = LocalDateTime.now();
    // getters and setters
}