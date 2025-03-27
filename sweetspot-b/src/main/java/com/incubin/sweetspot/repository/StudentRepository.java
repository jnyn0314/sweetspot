package com.incubin.sweetspot.repository;

import com.incubin.sweetspot.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
