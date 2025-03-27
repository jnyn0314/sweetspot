package com.incubin.sweetspot.mapper;

import com.incubin.sweetspot.dto.TeacherDto;
import com.incubin.sweetspot.entity.Teacher;

public class TeacherMapper {
    public static TeacherDto toDto(Teacher teacher) {
        return new TeacherDto(
                teacher.getId(),
                teacher.getName(),
                teacher.getLoginId(),
                teacher.getCollege(),
                teacher.getSex() // 엔티티에서 Sex를 가져와서 DTO로 전달
        );
    }
}
