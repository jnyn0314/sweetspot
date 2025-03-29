package com.incubin.sweetspot.repository;

import com.incubin.sweetspot.entity.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SubjectRepository extends JpaRepository<Subject, Long> {
    // 주간 계획을 ID로 조회하는 메서드
    List<Subject> findByWeeklyPlanSubjects_WeeklyPlan_Id(Long studentWeeklyPlanId);
}
