package com.incubin.sweetspot.repository;

import com.incubin.sweetspot.entity.StudentSubject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentSubjectRepository extends JpaRepository<StudentSubject, Long> {
    // 기본적인 CRUD 작업은 JpaRepository에서 제공합니다.
    // 필요한 경우 여기에 커스텀 쿼리 메서드를 추가할 수 있습니다.
}
