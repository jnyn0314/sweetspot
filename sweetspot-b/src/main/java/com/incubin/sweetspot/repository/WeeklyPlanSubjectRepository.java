package com.incubin.sweetspot.repository;

import com.incubin.sweetspot.entity.WeeklyPlanSubject;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WeeklyPlanSubjectRepository extends JpaRepository<WeeklyPlanSubject, Long> {
    List<WeeklyPlanSubject> findByWeeklyPlan_Id(Long weeklyPlanId);
}
