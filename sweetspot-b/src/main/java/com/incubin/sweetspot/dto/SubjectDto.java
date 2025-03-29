package com.incubin.sweetspot.dto;

import java.util.List;

public class SubjectDto {
    private Long id;
    private String name;
    private List<SubSubjectDto> subSubjects;

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

    public List<SubSubjectDto> getSubSubjects() {
        return subSubjects;
    }

    public void setSubSubjects(List<SubSubjectDto> subSubjects) {
        this.subSubjects = subSubjects;
    }
}
