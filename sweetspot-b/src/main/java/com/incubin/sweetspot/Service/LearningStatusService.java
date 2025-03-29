package com.incubin.sweetspot.Service;

import com.incubin.sweetspot.dto.LearningStatusDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LearningStatusService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<LearningStatusDto> getLearningStatus(Long studentId) {
        String sql = "SELECT " +
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
            dto.setSubjectName(rs.getString("subjectName"));
            dto.setSubSubjectName(rs.getString("subSubjectName"));
            dto.setFeedbackDetails(rs.getString("feedback_details"));
            dto.setPlanDetails(rs.getString("plan_details"));
            dto.setGrade(rs.getInt("grade"));
            return dto;
        });
    }
}
