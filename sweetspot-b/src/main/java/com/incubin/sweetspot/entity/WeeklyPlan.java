package com.incubin.sweetspot.entity;

import jakarta.persistence.*;
import org.springframework.data.annotation.Id;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "weekly_plans")
public class WeeklyPlan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;
    private LocalDate weekStartDate;
    private LocalDate weekEndDate;
    @OneToMany(mappedBy = "weeklyPlan")
    private List<WeeklyPlanSubject> weeklyPlanSubjects;
    private LocalDateTime createdAt = LocalDateTime.now();
    // getters and setters
}