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
    // 추가: subject 필드가 없다면 선언
    @ManyToOne
    @JoinColumn(name = "subject_id")
    private Subject subject;
    @OneToMany(mappedBy = "studentSubject")  // mappedBy가 WeeklyPlanSubject의 studentSubject 필드를 참조하도록 설정
    private List<WeeklyPlanSubject> weeklyPlanSubjects;

    @OneToMany(mappedBy = "studentSubject")
    private List<SubjectGradeHistory> gradeHistories;

    @Column(name="created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

    // getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }

    public List<WeeklyPlanSubject> getWeeklyPlanSubjects() {
        return weeklyPlanSubjects;
    }

    public void setWeeklyPlanSubjects(List<WeeklyPlanSubject> weeklyPlanSubjects) {
        this.weeklyPlanSubjects = weeklyPlanSubjects;
    }

    public List<SubjectGradeHistory> getGradeHistories() {
        return gradeHistories;
    }

    public void setGradeHistories(List<SubjectGradeHistory> gradeHistories) {
        this.gradeHistories = gradeHistories;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
