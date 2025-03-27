package com.incubin.sweetspot.mapper;

import com.incubin.sweetspot.dto.StudentDto;
import com.incubin.sweetspot.entity.Student;

public class StudentMapper {
    public static StudentDto toDto(Student student) {
        return new StudentDto(
                student.getId(),
                student.getName(),
                student.getGrade(),
                student.getCreatedAt()
        );
    }
}
