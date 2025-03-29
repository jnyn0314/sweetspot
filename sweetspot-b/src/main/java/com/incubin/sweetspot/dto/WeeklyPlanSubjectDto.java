package com.incubin.sweetspot.dto;

public class WeeklyPlanSubjectDto {
    private Long id;
    private Long weeklyPlanId;
    private Long studentSubjectId;
    private Integer grade;
    private String planDetails;

    private Long subjectId;  // subjectId 필드 추가

    private String feedbackDetails;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getWeeklyPlanId() {
        return weeklyPlanId;
    }

    public void setWeeklyPlanId(Long weeklyPlanId) {
        this.weeklyPlanId = weeklyPlanId;
    }

    public Long getStudentSubjectId() {
        return studentSubjectId;
    }

    public void setStudentSubjectId(Long studentSubjectId) {
        this.studentSubjectId = studentSubjectId;
    }

    public Integer getGrade() {
        return grade;
    }

    public void setGrade(Integer grade) {
        this.grade = grade;
    }

    public String getPlanDetails() {
        return planDetails;
    }

    public void setPlanDetails(String planDetails) {
        this.planDetails = planDetails;
    }
    // setSubjectId 메서드 추가
    public void setSubjectId(Long subjectId) {
        this.subjectId = subjectId;  // subjectId 값 설정
    }

    // subjectId 값을 가져오는 Getter 추가
    public Long getSubjectId() {
        return subjectId;
    }

    public String getFeedbackDetails() {
        return feedbackDetails;
    }

    public void setFeedbackDetails(String feedbackDetails) {
        this.feedbackDetails = feedbackDetails;
    }
}
