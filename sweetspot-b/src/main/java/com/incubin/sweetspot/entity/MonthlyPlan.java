package com.incubin.sweetspot.entity;

import jakarta.persistence.*;
import org.springframework.data.annotation.Id;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "monthly_plans")
public class MonthlyPlan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "student_subject_id")
    private StudentSubject studentSubject;
    private LocalDate monthDate;
    private String planDetails;
    private LocalDateTime createdAt = LocalDateTime.now();
    // getters and setters
}