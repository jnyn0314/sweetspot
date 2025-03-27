package com.incubin.sweetspot.entity;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "subject_tables")
public class SubjectTable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "subject_table_id")
    private SubjectTable subjectTable;


    private LocalDate weekStartDate;

    @OneToMany(mappedBy = "subjectTable", cascade = CascadeType.ALL)
    private List<Subject> subjects;

    // Getters
    public Long getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public LocalDate getWeekStartDate() {
        return weekStartDate;
    }

    public List<Subject> getSubjects() {
        return subjects;
    }

    // Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setWeekStartDate(LocalDate weekStartDate) {
        this.weekStartDate = weekStartDate;
    }

    public void setSubjects(List<Subject> subjects) {
        this.subjects = subjects;
    }
}
