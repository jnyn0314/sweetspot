package com.incubin.sweetspot.repository;

import com.incubin.sweetspot.entity.Subject;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubjectRepository extends JpaRepository<Subject, Long> {
}