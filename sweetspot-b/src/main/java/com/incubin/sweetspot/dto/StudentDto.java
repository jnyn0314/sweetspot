package com.incubin.sweetspot.dto;

import java.time.LocalDateTime;
public class StudentDto {

    private Long id; // 학생 ID
    private String name; // 학생 이름
    private int grade; // 학생 학년

    // 기본 생성자
    public StudentDto() {
    }

    // 모든 필드를 포함하는 생성자
    public StudentDto(Long id, String name, int grade) {
        this.id = id;
        this.name = name;
        this.grade = grade;
    }

    // Getter와 Setter
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    @Override
    public String toString() {
        return "StudentDto{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", grade=" + grade +
                '}';
    }
}
