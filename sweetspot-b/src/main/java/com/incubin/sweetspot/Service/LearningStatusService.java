package com.incubin.sweetspot.Service;

import com.incubin.sweetspot.dto.LearningStatusDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LearningStatusService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<LearningStatusDto> getLearningStatus(Long studentId) {
        String sql = "SELECT " +
                "    wps.id, " +  // id 추가
                "    s.name AS subjectName, " +
                "    ss.name AS subSubjectName, " +
                "    wps.feedback_details, " +
                "    wps.plan_details, " +
                "    wps.grade " +
                "FROM " +
                "    weekly_plan_subjects wps " +
                "JOIN " +
                "    student_subjects sts ON wps.student_subject_id = sts.id " +
                "JOIN " +
                "    subjects s ON sts.subject_id = s.id " +
                "JOIN " +
                "    subsubjects ss ON sts.subsubject_id = ss.id " +
                "WHERE sts.student_id = ?";

        return jdbcTemplate.query(sql, new Object[]{studentId}, (rs, rowNum) -> {
            LearningStatusDto dto = new LearningStatusDto();
            dto.setId(rs.getLong("id"));  // ID 값 설정
            dto.setSubjectName(rs.getString("subjectName"));
            dto.setSubSubjectName(rs.getString("subSubjectName"));
            dto.setFeedbackDetails(rs.getString("feedback_details"));
            dto.setPlanDetails(rs.getString("plan_details"));
            dto.setGrade(rs.getInt("grade"));
            return dto;
        });


    }
    // 학습 상태 업데이트
    public void updateLearningStatus(List<LearningStatusDto> updatedData) {
        String sql = "UPDATE weekly_plan_subjects SET plan_details = ?, feedback_details = ? WHERE id = ?";

        for (LearningStatusDto dto : updatedData) {
            int rowsAffected = jdbcTemplate.update(sql, dto.getPlanDetails(), dto.getFeedbackDetails(), dto.getId());
            if (rowsAffected == 0) {
                // 업데이트 실패 시 메시지 출력
                System.out.println("Update failed for ID: " + dto.getId());
            } else {
                // 성공 시 확인 메시지 출력 (선택 사항)
                System.out.println("Update successful for ID: " + dto.getId());
            }
        }
    }
    // 새로운 과목과 세부 과목 추가
    public void addSubject(LearningStatusDto newSubject) {
        String sql = "INSERT INTO weekly_plan_subjects (student_subject_id, feedback_details, plan_details, grade) " +
                "VALUES (?, ?, ?, ?)";

        // student_subject_id는 studentId와 subjectName/subSubjectName으로 매핑된 ID를 찾아야 함
        Long studentSubjectId = getStudentSubjectId(newSubject.getStudentId(), newSubject.getSubjectName(), newSubject.getSubSubjectName());

        if (studentSubjectId == null) {
            throw new IllegalArgumentException("Invalid student or subject information.");
        }

        jdbcTemplate.update(sql,
                studentSubjectId,
                newSubject.getFeedbackDetails(),
                newSubject.getPlanDetails(),
                newSubject.getGrade());
    }

    // student_subject_id 찾기 (학생 ID와 과목 이름으로 매핑)
    private Long getStudentSubjectId(Long studentId, String subjectName, String subSubjectName) {
        String sql = "SELECT sts.id " +
                "FROM student_subjects sts " +
                "JOIN subjects s ON sts.subject_id = s.id " +
                "JOIN subsubjects ss ON sts.subsubject_id = ss.id " +
                "WHERE sts.student_id = ? AND s.name = ? AND ss.name = ?";

        try {
            return jdbcTemplate.queryForObject(sql, Long.class, studentId, subjectName, subSubjectName);
        } catch (EmptyResultDataAccessException e) {
            return null; // 매핑된 데이터가 없는 경우 null 반환
        }
    }
}
