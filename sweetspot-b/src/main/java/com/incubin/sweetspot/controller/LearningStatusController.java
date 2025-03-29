package com.incubin.sweetspot.controller;

import com.incubin.sweetspot.Service.LearningStatusService;
import com.incubin.sweetspot.dto.LearningStatusDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/admin/learning-status") // URL 수정
public class LearningStatusController {

    @Autowired
    private LearningStatusService learningStatusService;

    // 특정 학생의 학습 상태 가져오기
    @GetMapping("/{studentId}") // GET 메서드로 설정
    public List<LearningStatusDto> getLearningStatus(@PathVariable Long studentId) {
        System.out.println("Fetching learning status for student ID: " + studentId);
        return learningStatusService.getLearningStatus(studentId);
    }
    // 학습 상태 업데이트
    @PostMapping("/update")
    public ResponseEntity<Map<String, String>> updateLearningStatus(@RequestBody List<LearningStatusDto> updatedData){
        learningStatusService.updateLearningStatus(updatedData);
        Map<String, String> response = new HashMap<>();
        response.put("message", "수정되었습니다.");
        return ResponseEntity.ok(response);
    }

    // 과목 추가 API
    @PostMapping("/add")
    public ResponseEntity<String> addSubject(@RequestBody LearningStatusDto newSubject) {
        try {
            learningStatusService.addSubject(newSubject);
            return ResponseEntity.ok("과목이 성공적으로 추가되었습니다.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("과목 추가 중 오류가 발생했습니다: " + e.getMessage());
        }
    }

}
