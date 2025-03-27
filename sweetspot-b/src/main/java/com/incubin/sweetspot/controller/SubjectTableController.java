package com.incubin.sweetspot.controller;

import com.incubin.sweetspot.Service.SubjectDataService;
import com.incubin.sweetspot.entity.Subject;
import com.incubin.sweetspot.repository.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/subjects")
public class SubjectTableController {
    @Autowired
    private SubjectDataService subjectDataService; // 주입

    @GetMapping("/student/{studentId}")
    public List<Subject> getSubjectsForStudent(@PathVariable Long studentId) {
        return subjectDataService.getSubjectsForStudent(studentId);
    }
}
