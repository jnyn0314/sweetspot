package com.incubin.sweetspot.Service;

import com.incubin.sweetspot.entity.SubjectTable;
import com.incubin.sweetspot.entity.User;
import com.incubin.sweetspot.repository.SubjectTableRepository;
import com.incubin.sweetspot.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class SubjectTableService {
    private final SubjectTableRepository subjectTableRepository;
    private final UserRepository userRepository;

    public SubjectTableService(SubjectTableRepository subjectTableRepository, UserRepository userRepository) {
        this.subjectTableRepository = subjectTableRepository;
        this.userRepository = userRepository;
    }

    public List<SubjectTable> getSubjectTablesForUser(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return subjectTableRepository.findByUser(user);
    }

    public SubjectTable createSubjectTable(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        SubjectTable subjectTable = new SubjectTable();
        subjectTable.setUser(user);
        subjectTable.setWeekStartDate(LocalDate.now());
        return subjectTableRepository.save(subjectTable);
    }
}