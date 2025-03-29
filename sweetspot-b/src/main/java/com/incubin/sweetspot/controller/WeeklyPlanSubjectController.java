package com.incubin.sweetspot.controller;

import com.incubin.sweetspot.Service.WeeklyPlanSubjectService;
import com.incubin.sweetspot.dto.WeeklyPlanSubjectDto;
import com.incubin.sweetspot.entity.WeeklyPlanSubject;
import com.incubin.sweetspot.entity.WeeklyPlan;
import com.incubin.sweetspot.entity.StudentSubject;
import com.incubin.sweetspot.repository.WeeklyPlanRepository;
import com.incubin.sweetspot.repository.StudentSubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/learning-status/{studentId}")
public class WeeklyPlanSubjectController {

    @Autowired
    private WeeklyPlanSubjectService weeklyPlanSubjectService;

    @Autowired
    private WeeklyPlanRepository weeklyPlanRepository;

    @Autowired
    private StudentSubjectRepository studentSubjectRepository;

    // 학생의 주간 학습 계획과 관련된 과목 정보 가져오기
    @GetMapping("/{weeklyPlanId}")
    public List<WeeklyPlanSubjectDto> getSubjectsByWeeklyPlan(@PathVariable Long weeklyPlanId) {
        return weeklyPlanSubjectService.getWeeklyPlanSubjects(weeklyPlanId);
    }

    // 새로운 주간 학습 계획 생성
    @PostMapping
    public WeeklyPlanSubjectDto createWeeklyPlanSubject(@RequestBody WeeklyPlanSubjectDto subjectDto) {
        WeeklyPlanSubject subject = new WeeklyPlanSubject();

        // WeeklyPlan 엔티티 설정
        WeeklyPlan weeklyPlan = weeklyPlanRepository.findById(subjectDto.getWeeklyPlanId())
                .orElseThrow(() -> new RuntimeException("WeeklyPlan not found"));
        subject.setWeeklyPlan(weeklyPlan);

        // StudentSubject 엔티티 설정
        StudentSubject studentSubject = studentSubjectRepository.findById(subjectDto.getStudentSubjectId())
                .orElseThrow(() -> new RuntimeException("StudentSubject not found"));
        subject.setStudentSubject(studentSubject);

        // DTO에서 grade, planDetails, feedbackDetails 설정
        subject.setGrade(subjectDto.getGrade());
        subject.setPlanDetails(subjectDto.getPlanDetails());
        subject.setFeedbackDetails(subjectDto.getFeedbackDetails()); // feedbackDetails 추가

        // 주간 학습 계획 과목 저장
        WeeklyPlanSubject savedSubject = weeklyPlanSubjectService.createWeeklyPlanSubject(subject);

        return convertToDto(savedSubject);
    }

    // WeeklyPlanSubject를 WeeklyPlanSubjectDto로 변환
    private WeeklyPlanSubjectDto convertToDto(WeeklyPlanSubject subject) {
        WeeklyPlanSubjectDto dto = new WeeklyPlanSubjectDto();
        dto.setId(subject.getId());
        dto.setWeeklyPlanId(subject.getWeeklyPlan().getId());
        dto.setStudentSubjectId(subject.getStudentSubject().getId());
        dto.setGrade(subject.getGrade());
        dto.setPlanDetails(subject.getPlanDetails());
        dto.setFeedbackDetails(subject.getFeedbackDetails()); // feedbackDetails 추가
        return dto;
    }
}
