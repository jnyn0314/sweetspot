package com.incubin.sweetspot.Service;

import com.incubin.sweetspot.dto.SubSubjectDto;
import com.incubin.sweetspot.dto.SubjectDto;
import com.incubin.sweetspot.entity.Subject;
import com.incubin.sweetspot.repository.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubjectService {
    @Autowired
    private SubjectRepository subjectRepository;

    // 모든 과목 조회
    public List<SubjectDto> getAllSubjects() {
        List<Subject> subjects = subjectRepository.findAll();
        return subjects.stream()
                .map(subject -> {
                    SubjectDto dto = new SubjectDto();
                    dto.setId(subject.getId());
                    dto.setName(subject.getName());
                    dto.setSubSubjects(subject.getSubSubjects().stream()  // 오류 해결
                            .map(subSubject -> new SubSubjectDto(subSubject.getId(), subSubject.getName()))
                            .toList());
                    return dto;
                })
                .toList();
    }

    // 특정 학생의 주간 계획에 맞는 과목 조회
    public List<SubjectDto> getSubjectsByStudentWeeklyPlan(Long studentWeeklyPlanId) {
        List<Subject> subjects = subjectRepository.findByWeeklyPlanSubjects_WeeklyPlan_Id(studentWeeklyPlanId);
        return subjects.stream()
                .map(subject -> {
                    SubjectDto dto = new SubjectDto();
                    dto.setId(subject.getId());
                    dto.setName(subject.getName());
                    dto.setSubSubjects(subject.getSubSubjects().stream()  // 오류 해결
                            .map(subSubject -> new SubSubjectDto(subSubject.getId(), subSubject.getName()))
                            .toList());
                    return dto;
                })
                .toList();
    }
}
