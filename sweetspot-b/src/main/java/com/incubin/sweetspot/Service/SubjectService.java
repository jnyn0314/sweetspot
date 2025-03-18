package com.incubin.sweetspot.Service;

import com.incubin.sweetspot.entity.Subject;
import com.incubin.sweetspot.repository.SubjectRepository;
import org.springframework.stereotype.Service;

@Service
public class SubjectService {
    private final SubjectRepository subjectRepository;

    public SubjectService(SubjectRepository subjectRepository) {
        this.subjectRepository = subjectRepository;
    }

    public Subject updateSubjectDoAction(Long subjectId, String doAction, Long userId) {
        Subject subject = subjectRepository.findById(subjectId)
                .orElseThrow(() -> new RuntimeException("Subject not found"));

        if (!subject.getSubjectTable().getUser().getId().equals(userId)) {
            throw new RuntimeException("Unauthorized access");
        }

        subject.setDoAction(doAction);
        return subjectRepository.save(subject);
    }
}