package com.incubin.sweetspot.Service;

import com.incubin.sweetspot.dto.WeeklyPlanDto;
import com.incubin.sweetspot.dto.WeeklyPlanSubjectDto;
import com.incubin.sweetspot.dto.SubjectDto;
import com.incubin.sweetspot.entity.WeeklyPlan;
import com.incubin.sweetspot.repository.WeeklyPlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class WeeklyPlanService {
    @Autowired
    private WeeklyPlanRepository weeklyPlanRepository;
    @Autowired
    private WeeklyPlanSubjectService weeklyPlanSubjectService;

    public List<WeeklyPlanDto> getWeeklyPlans(Long studentId) {
        List<WeeklyPlan> weeklyPlans = weeklyPlanRepository.findByStudentId(studentId);
        return weeklyPlans.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    private WeeklyPlanDto convertToDto(WeeklyPlan plan) {
        WeeklyPlanDto dto = new WeeklyPlanDto();
        dto.setId(plan.getId());
        dto.setStudentId(plan.getStudent() != null ? plan.getStudent().getId() : null);
        dto.setWeekStartDate(plan.getWeekStartDate());
        dto.setWeekEndDate(plan.getWeekEndDate());
        dto.setGrade(plan.getGrade());

        List<WeeklyPlanSubjectDto> weeklyPlanSubjectDtos = weeklyPlanSubjectService.getWeeklyPlanSubjects(plan.getId());
        List<SubjectDto> subjectDtos = weeklyPlanSubjectDtos.stream()
                .map(this::convertToSubjectDto)
                .collect(Collectors.toList());
        dto.setSubjects(subjectDtos);

        return dto;
    }

    private SubjectDto convertToSubjectDto(WeeklyPlanSubjectDto weeklyPlanSubjectDto) {
        SubjectDto subjectDto = new SubjectDto();
        // WeeklyPlanSubjectDto에서 필요한 정보를 SubjectDto로 복사
        // 예를 들어:
        subjectDto.setId(weeklyPlanSubjectDto.getStudentSubjectId());
        // 다른 필드들도 필요에 따라 설정
        return subjectDto;
    }
}
