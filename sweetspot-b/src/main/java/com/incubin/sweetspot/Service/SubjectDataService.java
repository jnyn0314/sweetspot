package com.incubin.sweetspot.Service;
import com.incubin.sweetspot.entity.Subject;
import com.incubin.sweetspot.repository.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubjectDataService {
    @Autowired
    private SubjectRepository subjectRepository;

    public List<Subject> getSubjectsForStudent(Long studentId) {
        return subjectRepository.findByWeeklyPlanSubjects_WeeklyPlan_Id(studentId);
    }
}