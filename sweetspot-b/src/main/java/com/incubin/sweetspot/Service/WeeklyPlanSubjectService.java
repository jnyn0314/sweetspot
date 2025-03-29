package com.incubin.sweetspot.Service;

import com.incubin.sweetspot.dto.WeeklyPlanSubjectDto;
import com.incubin.sweetspot.entity.WeeklyPlanSubject;
import com.incubin.sweetspot.repository.WeeklyPlanSubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class WeeklyPlanSubjectService {
    @Autowired
    private WeeklyPlanSubjectRepository weeklyPlanSubjectRepository;

    public List<WeeklyPlanSubjectDto> getWeeklyPlanSubjects(Long weeklyPlanId) {
        List<WeeklyPlanSubject> subjects = weeklyPlanSubjectRepository.findByWeeklyPlan_Id(weeklyPlanId);
        return convertToDtoList(subjects);
    }

    public List<WeeklyPlanSubjectDto> convertToDtoList(List<WeeklyPlanSubject> subjects) {
        return subjects.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    private WeeklyPlanSubjectDto convertToDto(WeeklyPlanSubject subject) {
        WeeklyPlanSubjectDto dto = new WeeklyPlanSubjectDto();
        dto.setId(subject.getId());
        dto.setWeeklyPlanId(subject.getWeeklyPlan().getId());
        dto.setStudentSubjectId(subject.getStudentSubject().getId()); // student_subject_id 사용
        dto.setGrade(subject.getGrade());
        dto.setPlanDetails(subject.getPlanDetails());

        // student_subject에서 subject_id 가져오기
        if (subject.getStudentSubject() != null && subject.getStudentSubject().getSubject() != null) {
            dto.setSubjectId(subject.getStudentSubject().getSubject().getId());
        }

        return dto;
    }


    public WeeklyPlanSubject createWeeklyPlanSubject(WeeklyPlanSubject weeklyPlanSubject) {
        return weeklyPlanSubjectRepository.save(weeklyPlanSubject);
    }
}
