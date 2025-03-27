package com.incubin.sweetspot.controller;

import com.incubin.sweetspot.Service.TeacherService;
import com.incubin.sweetspot.dto.StudentDto;
import com.incubin.sweetspot.dto.TeacherDto;
import com.incubin.sweetspot.entity.Student;
import com.incubin.sweetspot.entity.Teacher;
import com.incubin.sweetspot.mapper.StudentMapper;
import com.incubin.sweetspot.mapper.TeacherMapper;
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
@RequestMapping("/admin/teacher-management")
@Slf4j
public class TeacherController {

    private final TeacherService teacherService;
    private static final Logger logger = LoggerFactory.getLogger(TeacherController.class);

    public TeacherController(TeacherService teacherService) {
        this.teacherService = teacherService;
    }

    // 전체 강사 조회
    @GetMapping
    public ResponseEntity<List<TeacherDto>> getAllTeachers() {
        logger.info("getAllTeachers() called");
        List<Teacher> teachers = teacherService.getAllTeachers();
        List<TeacherDto> teacherDtos = teachers.stream()
                .map(TeacherMapper::toDto)
                .collect(Collectors.toList());
        return ResponseEntity.ok(teacherDtos);
    }

    // 특정 강사의 학생들 조회
    @GetMapping("/{id}")
    public ResponseEntity<TeacherDto> getTeacherDetails(@PathVariable Long id) {
        logger.info("getTeacherDetails() called for teacherId: {}", id);

        // Teacher 정보 조회
        Teacher teacher = teacherService.getTeacherById(id);

        if (teacher == null) {
            return ResponseEntity.notFound().build();  // Teacher가 없으면 404 반환
        }

        // TeacherDto 생성
        TeacherDto teacherDto = new TeacherDto(
                teacher.getId(),
                teacher.getName(),
                teacher.getLoginId(),
                teacher.getCollege(),
                teacher.getSex()
        );

        // 해당 Teacher에 속한 모든 Student 정보 가져오기
        List<StudentDto> studentDtos = teacher.getStudents().stream()
                .map(student -> new StudentDto(
                        student.getId(),
                        student.getName(),
                        student.getGrade()
                ))
                .collect(Collectors.toList());

        teacherDto.setStudents(studentDtos);  // TeacherDto에 학생 목록 설정

        // TeacherDto와 학생 목록을 포함하여 응답
        return ResponseEntity.ok(teacherDto);
    }
}
