import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './SubjectTable.module.css';

export default function SubjectTable({ userId, subjectTableId, userRole }) {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetchSubjects();
  }, [subjectTableId]);

  const fetchSubjects = async () => {
    try {
      const response = await axios.get(`/api/subject-tables/${subjectTableId}/subjects`);
      setSubjects(response.data);
    } catch (error) {
      console.error('Error fetching subjects:', error);
    }
  };

  const addSubject = async () => {
    try {
      const response = await axios.post(`/api/subject-tables/${subjectTableId}/subjects`, {
        subjectName: '',
        detail: '',
        plan: '',
        doAction: '',
        feedback: '',
        score: null,
        remarks: ''
      });
      setSubjects([...subjects, response.data]);
    } catch (error) {
      console.error('Error adding subject:', error);
    }
  };

  const updateSubject = async (subjectId, field, value) => {
    try {
      await axios.put(`/api/subject-tables/subjects/${subjectId}`, { [field]: value });
      const updatedSubjects = subjects.map(subject =>
        subject.id === subjectId ? { ...subject, [field]: value } : subject
      );
      setSubjects(updatedSubjects);
    } catch (error) {
      console.error('Error updating subject:', error);
    }
  };

  const deleteSubject = async (subjectId) => {
    const confirmDelete = window.confirm('삭제하시겠습니까?');
    if (confirmDelete) {
      try {
        await axios.delete(`/api/subject-tables/subjects/${subjectId}`);
        setSubjects(subjects.filter(subject => subject.id !== subjectId));
      } catch (error) {
        console.error('Error deleting subject:', error);
      }
    }
  };

  const handleDeleteTable = async () => {
    const confirmDelete = window.confirm('표를 삭제하시겠습니까?');
    if (confirmDelete) {
      try {
        await axios.delete(`/api/subject-tables/${subjectTableId}`);
        // 여기서 상위 컴포넌트에 테이블 삭제를 알리는 콜백을 호출할 수 있습니다.
      } catch (error) {
        console.error('Error deleting subject table:', error);
      }
    }
  };

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>과목</th>
            <th>세부 내용</th>
            <th>Plan (멘토)</th>
            <th>Do (학생)</th>
            <th>Feedback (멘토)</th>
            <th>점수</th>
            <th>비고</th>
            <th>작업</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={subject.id}>
              <td data-label="과목">
                <input
                  type="text"
                  value={subject.subjectName}
                  onChange={(e) => updateSubject(subject.id, 'subjectName', e.target.value)}
                />
              </td>
              <td data-label="세부 내용">
                <textarea
                  className={styles.textArea}
                  value={subject.detail}
                  onChange={(e) => updateSubject(subject.id, 'detail', e.target.value)}
                />
              </td>
              <td data-label="Plan (멘토)">
                <textarea
                  className={styles.textArea}
                  value={subject.plan}
                  onChange={(e) => updateSubject(subject.id, 'plan', e.target.value)}
                />
              </td>
              <td data-label="Do (학생)">
                <textarea
                  className={styles.textArea}
                  value={subject.doAction}
                  onChange={(e) => updateSubject(subject.id, 'doAction', e.target.value)}
                />
              </td>
              <td data-label="Feedback (멘토)">
                <textarea
                  className={styles.textArea}
                  value={subject.feedback}
                  onChange={(e) => updateSubject(subject.id, 'feedback', e.target.value)}
                />
              </td>
              <td data-label="점수">
                <input
                  type="number"
                  className={styles.numberInput}
                  value={subject.score || ''}
                  onChange={(e) => updateSubject(subject.id, 'score', e.target.value)}
                />
              </td>
              <td data-label="비고">
                <textarea
                  className={styles.textArea}
                  value={subject.remarks}
                  onChange={(e) => updateSubject(subject.id, 'remarks', e.target.value)}
                />
              </td>
              <td data-label="작업">
                <button onClick={() => deleteSubject(subject.id)} className={styles.deleteButton}>
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.tableControls}>
        <button onClick={addSubject} className={styles.addButton}>
          + 행 추가
        </button>
        <button onClick={handleDeleteTable} className={styles.deleteTableButton}>
          표 삭제
        </button>
      </div>
    </div>
  );
}
