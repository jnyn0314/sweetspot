package com.incubin.sweetspot.repository;

import com.incubin.sweetspot.entity.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface SubjectRepository extends JpaRepository<Subject, Long> {
    @Query("SELECT DISTINCT s FROM Subject s " +
            "JOIN s.studentSubjects ss " +
            "JOIN ss.weeklyPlanSubjects wps " +
            "JOIN wps.weeklyPlan wp " +
            "WHERE wp.student.id = :studentId")
    List<Subject> findSubjectsByStudentWeeklyPlan(@Param("studentId") Long studentId);
}
