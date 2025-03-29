package com.incubin.sweetspot.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "weekly_plan_subjects")
public class WeeklyPlanSubject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "subject_id")
    private Subject subject;  // <= subject 필드가 있어야 함
    @ManyToOne
    @JoinColumn(name = "weekly_plan_id")  // FK 매핑 (WeeklyPlan과 연결)
    private WeeklyPlan weeklyPlan;

    @ManyToOne
    @JoinColumn(name = "student_subject_id")  // StudentSubject와 매핑
    private StudentSubject studentSubject;

    private int grade;

    @Column(name="plan_details")
    private String planDetails;

    @Column(name="feedback_details")
    private String feedbackDetails;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public WeeklyPlan getWeeklyPlan() {
        return weeklyPlan;
    }

    public void setWeeklyPlan(WeeklyPlan weeklyPlan) {
        this.weeklyPlan = weeklyPlan;
    }

    public StudentSubject getStudentSubject() {
        return studentSubject;
    }

    public void setStudentSubject(StudentSubject studentSubject) {
        this.studentSubject = studentSubject;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    public String getPlanDetails() {
        return planDetails;
    }

    public void setPlanDetails(String planDetails) {
        this.planDetails = planDetails;
    }

    public void setWeeklyPlanId(Long id) {
        this.id = id;
    }

    public String getFeedbackDetails() {
        return feedbackDetails;
    }

    public void setFeedbackDetails(String feedbackDetails) {
        this.feedbackDetails = feedbackDetails;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }
}
