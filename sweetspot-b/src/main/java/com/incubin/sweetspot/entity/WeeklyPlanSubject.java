package com.incubin.sweetspot.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "weekly_plan_subjects")
public class WeeklyPlanSubject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "weekly_plan_id")
    private WeeklyPlan weeklyPlan;
    @ManyToOne
    @JoinColumn(name = "student_subject_id")
    private StudentSubject studentSubject;
    private int grade;
    private String planDetails;
    private LocalDateTime createdAt = LocalDateTime.now();
    // getters and setters
}

