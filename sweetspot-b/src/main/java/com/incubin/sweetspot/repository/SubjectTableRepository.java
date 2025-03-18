package com.incubin.sweetspot.repository;

import com.incubin.sweetspot.entity.SubjectTable;
import com.incubin.sweetspot.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SubjectTableRepository extends JpaRepository<SubjectTable, Long> {
    List<SubjectTable> findByUser(User user);
}