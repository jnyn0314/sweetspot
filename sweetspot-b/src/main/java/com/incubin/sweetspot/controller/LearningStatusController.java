package com.incubin.sweetspot.controller;

import com.incubin.sweetspot.Service.LearningStatusService;
import com.incubin.sweetspot.dto.LearningStatusDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/admin/learning-status") // URL 수정
public class LearningStatusController {

    @Autowired
    private LearningStatusService learningStatusService;

    // 특정 학생의 학습 상태 가져오기
    @GetMapping
    public List<LearningStatusDto> getLearningStatus(@RequestParam Long studentId) { // @PathVariable 제거, @RequestParam 추가
        return learningStatusService.getLearningStatus(studentId);
    }
}
