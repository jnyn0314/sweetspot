package com.incubin.sweetspot.dto;

import com.incubin.sweetspot.entity.Sex;

import java.util.List;

public class TeacherDto {
    private Long id;
    private String name;
    private String loginId; // 강사 id
    private String college;
    private Sex sex;

    // 강사가 관리하는 학생 목록 추가
    private List<StudentDto> students;

    public TeacherDto(Long id, String name, String loginId, String college, Sex sex) {
        this.id = id;
        this.name = name;
        this.loginId = loginId;
        this.college = college;
        this.sex = sex;
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    // getter and setter
    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name = name;
    }

    public String getCollege() {
        return college;
    }

    public void setCollege(String college) {
        this.college = college;
    }

    public String getLoginId() {
        return loginId;
    }

    public void setLoginId(String loginId) {
        this.loginId = loginId;
    }

    public Sex getSex() {
        return sex;
    }

    public void setSex(Sex sex) {
        this.sex = sex;
    }

    // 학생 목록 getter, setter 추가
    public List<StudentDto> getStudents() {
        return students;
    }

    public void setStudents(List<StudentDto> students) {
        this.students = students;
    }

    @Override
    public String toString() {
        return "TeacherDto{" +
                "name='" + name + '\'' +
                ", loginId=" + loginId +
                ", college=" + college +
                ", sex=" + sex +
                ", students=" + students + // 학생 목록도 출력
                '}';
    }
}
