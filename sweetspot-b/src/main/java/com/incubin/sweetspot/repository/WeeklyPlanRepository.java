package com.incubin.sweetspot.repository;
import com.incubin.sweetspot.entity.WeeklyPlan;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WeeklyPlanRepository extends JpaRepository<WeeklyPlan, Long> {
    List<WeeklyPlan> findByStudentId(Long studentId);
}