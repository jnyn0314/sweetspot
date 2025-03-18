package com.incubin.sweetspot.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "subjects")
public class Subject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "subject_table_id")
    private SubjectTable subjectTable;

    private String subjectName;
    private String detail;
    private String plan;
    private String doAction;
    private String feedback;
    private Integer score;
    private String remarks;

    // Getters
    public Long getId() {
        return id;
    }

    public SubjectTable getSubjectTable() {
        return subjectTable;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public String getDetail() {
        return detail;
    }

    public String getPlan() {
        return plan;
    }

    public String getDoAction() {
        return doAction;
    }

    public String getFeedback() {
        return feedback;
    }

    public Integer getScore() {
        return score;
    }

    public String getRemarks() {
        return remarks;
    }

    // Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setSubjectTable(SubjectTable subjectTable) {
        this.subjectTable = subjectTable;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public void setPlan(String plan) {
        this.plan = plan;
    }

    public void setDoAction(String doAction) {
        this.doAction = doAction;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}
