package com.incubin.sweetspot.dto;

import java.util.Date;
import java.util.List;

public class WeeklyPlanDto {
    private Long id;
    private Long studentId;  // 이 부분 추가
    private Date weekStartDate;
    private Date weekEndDate;
    private List<SubjectDto> subjects;
    private int grade;
    private String planDetails;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public List<SubjectDto> getSubjects() {
        return subjects;
    }

    public void setSubjects(List<SubjectDto> subjects) {
        this.subjects = subjects;
    }

    public Date getWeekEndDate() {
        return weekEndDate;
    }

    public void setWeekEndDate(Date weekEndDate) {
        this.weekEndDate = weekEndDate;
    }

    public Date getWeekStartDate() {
        return weekStartDate;
    }

    public void setWeekStartDate(Date weekStartDate) {
        this.weekStartDate = weekStartDate;
    }

    // 수정된 부분
    public void setStudentId(Long studentId) {
        this.studentId = studentId;  // studentId로 설정해야 함
    }
}
