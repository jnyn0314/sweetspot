package com.incubin.sweetspot.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "subjects")
public class Subject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToOne
    @JoinColumn(name = "subject_table")
    private SubjectTable subjectTable;

    @OneToMany(mappedBy = "subject")
    private List<StudentSubject> studentSubjects;

    private LocalDateTime createdAt = LocalDateTime.now();

    // Getters and setters
}
