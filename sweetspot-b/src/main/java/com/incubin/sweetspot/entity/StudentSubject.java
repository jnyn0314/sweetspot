package com.incubin.sweetspot.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "student_subjects")
public class StudentSubject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;
    @ManyToOne
    @JoinColumn(name = "subject_id")
    private Subject subject;
    @OneToMany(mappedBy = "studentSubject")
    private List<WeeklyPlanSubject> weeklyPlanSubjects;
    @OneToMany(mappedBy = "studentSubject")
    private List<SubjectGradeHistory> gradeHistories;
    private LocalDateTime createdAt = LocalDateTime.now();
    // getters and setters
}
