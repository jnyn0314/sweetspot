package com.incubin.sweetspot.controller;
import com.incubin.sweetspot.Service.SubjectService;
import com.incubin.sweetspot.dto.SubjectDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SubjectController {
    @Autowired
    private SubjectService subjectService;

    @GetMapping("/api/subjects")
    public List<SubjectDto> getSubjects() {
        return subjectService.getAllSubjects();
    }
}
