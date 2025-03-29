package com.incubin.sweetspot.dto;

public class LearningStatusDto {
    private String subjectName;
    private String subSubjectName;
    private String feedbackDetails;
    private String planDetails;
    private int grade;

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

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }
}
