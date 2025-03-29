package com.incubin.sweetspot.controller;
import com.incubin.sweetspot.Service.WeeklyPlanService;
import com.incubin.sweetspot.dto.WeeklyPlanDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/admin/weekly-plans")
public class WeeklyPlanController {
    @Autowired
    private WeeklyPlanService weeklyPlanService;

    @GetMapping("/{studentId}")
    public ResponseEntity<?> getWeeklyPlans(@PathVariable Long studentId) {
        List<WeeklyPlanDto> plans = weeklyPlanService.getWeeklyPlans(studentId);

        if (plans.isEmpty()) {
            return ResponseEntity.noContent().build(); // 204 No Content 반환
        }
        return ResponseEntity.ok(plans);
    }


}
