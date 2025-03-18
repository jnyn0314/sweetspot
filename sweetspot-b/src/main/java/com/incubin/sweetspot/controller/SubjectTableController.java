package com.incubin.sweetspot.controller;

import com.incubin.sweetspot.Service.SubjectService;
import com.incubin.sweetspot.Service.SubjectTableService;
import com.incubin.sweetspot.entity.Subject;
import com.incubin.sweetspot.entity.SubjectTable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subject-tables")
public class SubjectTableController {
    private final SubjectTableService subjectTableService;
    private final SubjectService subjectService;

    public SubjectTableController(SubjectTableService subjectTableService, SubjectService subjectService) {
        this.subjectTableService = subjectTableService;
        this.subjectService = subjectService;
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<SubjectTable>> getSubjectTablesForUser(@PathVariable Long userId) {
        return ResponseEntity.ok(subjectTableService.getSubjectTablesForUser(userId));
    }

    @PostMapping("/user/{userId}")
    public ResponseEntity<SubjectTable> createSubjectTable(@PathVariable Long userId) {
        return ResponseEntity.ok(subjectTableService.createSubjectTable(userId));
    }

    @PutMapping("/subjects/{subjectId}/do-action")
    public ResponseEntity<Subject> updateSubjectDoAction(
            @PathVariable Long subjectId,
            @RequestBody String doAction,
            @RequestParam Long userId) {
        return ResponseEntity.ok(subjectService.updateSubjectDoAction(subjectId, doAction, userId));
    }
}
