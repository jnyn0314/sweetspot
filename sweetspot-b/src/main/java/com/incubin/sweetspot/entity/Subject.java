package com.incubin.sweetspot.entity;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "subjects")
public class Subject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "subject", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<WeeklyPlanSubject> weeklyPlanSubjects = new ArrayList<>();

    @OneToMany(mappedBy = "subject", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<SubSubject> subSubjects = new ArrayList<>();

    // Getters and Setters
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

    public List<WeeklyPlanSubject> getWeeklyPlanSubjects() {
        return weeklyPlanSubjects;
    }

    public void setWeeklyPlanSubjects(List<WeeklyPlanSubject> weeklyPlanSubjects) {
        this.weeklyPlanSubjects = weeklyPlanSubjects;
    }

    public List<SubSubject> getSubSubjects() {
        return subSubjects;
    }

    public void setSubSubjects(List<SubSubject> subSubjects) {
        this.subSubjects = subSubjects;
    }
}
