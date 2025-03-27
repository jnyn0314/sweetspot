package com.incubin.sweetspot.Service;

import com.incubin.sweetspot.entity.Student;
import com.incubin.sweetspot.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    // 학생 목록 가져오기 - 기본 정보(name, grade, createdAt)만 반환
    public List<Student> getAllStudents() {
        return studentRepository.findAll();  // Lazy 필드 접근 없음
    }

    // 특정 학생 가져오기
    public Student getStudentById(Long id) {
        return studentRepository.findById(id).orElse(null);  // Lazy 필드 접근 없음
    }
}
