package com.incubin.sweetspot.controller;

import com.incubin.sweetspot.Service.StudentService;
import com.incubin.sweetspot.dto.StudentDto;
import com.incubin.sweetspot.entity.Student;
import com.incubin.sweetspot.mapper.StudentMapper;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/admin/student-management")
@Slf4j
public class StudentController {

    private final StudentService studentService;
    private static final Logger logger = LoggerFactory.getLogger(StudentController.class);
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    // 전체 학생 조회
    @GetMapping
    public ResponseEntity<List<StudentDto>> getAllStudents() {
        logger.info("getAllStudents() called");
        List<Student> students = studentService.getAllStudents();
        List<StudentDto> studentDtos = students.stream()
                .map(StudentMapper::toDto)
                .collect(Collectors.toList());
        return ResponseEntity.ok(studentDtos);
    }

    // 특정 학생 조회
    @GetMapping("/{id}")
    public ResponseEntity<StudentDto> getStudentById(@PathVariable Long id) {
        logger.info("getStudentById() called with id: {}", id);

        Student student = studentService.getStudentById(id);
        if (student != null) {
            StudentDto studentDto = StudentMapper.toDto(student);
            return ResponseEntity.ok(studentDto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
