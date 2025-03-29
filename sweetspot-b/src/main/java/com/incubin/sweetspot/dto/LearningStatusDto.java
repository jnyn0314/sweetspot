package com.incubin.sweetspot.dto;

public class LearningStatusDto {
    private Long id; // weekly_plan_subjects 테이블의 ID
    private Long studentId;
    private String subjectName;
    private String subSubjectName;
    private String feedbackDetails;
    private String planDetails;
    private Integer grade; // 참조 타입으로 변경

    public LearningStatusDto() {} // 기본 생성자 추가



    // Getters and Setters
    public String getSubjectName() {
        return subjectName;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    public String getSubSubjectName() {
        return subSubjectName;
    }

    public void setSubSubjectName(String subSubjectName) {
        this.subSubjectName = subSubjectName;
    }

    public String getFeedbackDetails() {
        return feedbackDetails;
    }

    public void setFeedbackDetails(String feedbackDetails) {
        this.feedbackDetails = feedbackDetails;
    }

    public String getPlanDetails() {
        return planDetails;
    }

    public void setPlanDetails(String planDetails) {
        this.planDetails = planDetails;
    }

    public Integer getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }
}
