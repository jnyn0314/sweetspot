import React, { useState, useEffect } from 'react';
import './LearningStatus.css';

const LearningStatus = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [newSubjectName, setNewSubjectName] = useState('');
  const [newSubSubjectName, setNewSubSubjectName] = useState('');

  // 토큰 가져오기
  const getToken = () => {
    const token = localStorage.getItem('token');
    console.log('[getToken] Token:', token);
    return token;
  };

  // 학생 목록 가져오기
  useEffect(() => {
    console.log('[useEffect - Students] Fetching student list...');
    const token = getToken();
    fetch(`${process.env.REACT_APP_API_URL}/admin/student-management`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('[useEffect - Students] Fetched data:', data);
        setStudents(data);
        if (data.length > 0) {
          setSelectedStudentId(data[0].id); // 첫 번째 학생 ID로 초기화
          console.log('[useEffect - Students] Selected student ID:', data[0].id);
        }
      })
      .catch((error) => console.error('[useEffect - Students] Error fetching students:', error));
  }, []);

  // 특정 학생의 학습 상태 가져오기
  useEffect(() => {
    if (selectedStudentId) {
      console.log('[useEffect - LearningStatus] Fetching learning status for student ID:', selectedStudentId);
      fetchLearningStatus();
    }
  }, [selectedStudentId]);

  // 학습 상태 데이터 가져오기 함수
  const fetchLearningStatus = async () => {
    const token = getToken();
    const url = `${process.env.REACT_APP_API_URL}/admin/learning-status/${selectedStudentId}`;
    console.log('[fetchLearningStatus] URL:', url);

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('[fetchLearningStatus] Fetched data:', data);

      // subjects 배열 재구성
      const formattedSubjects = data.reduce((acc, item) => {
        const existingSubject = acc.find(
          (s) => s.subjectName === item.subjectName
        );
        if (existingSubject) {
          existingSubject.subSubjects.push({
            id: item.id,
            name: item.subSubjectName,
            planDetails: item.planDetails,
            feedbackDetails: item.feedbackDetails,
            grade: item.grade,
          });
        } else {
          acc.push({
            subjectName: item.subjectName,
            subSubjects: [
              {
                id: item.id,
                name: item.subSubjectName,
                planDetails: item.planDetails,
                feedbackDetails: item.feedbackDetails,
                grade: item.grade,
              },
            ],
          });
        }
        return acc;
      }, []);

      setSubjects(formattedSubjects);
    } catch (error) {
      console.error('[fetchLearningStatus] Error fetching report:', error);
    }
  };

  // 입력값 변경 핸들러
  const handleInputChange = (subjectIndex, subIndex, field, value) => {
    console.log(`[handleInputChange] Updating field "${field}" with value "${value}"`);
    const updatedSubjects = [...subjects];
    updatedSubjects[subjectIndex].subSubjects[subIndex][field] = value;
    setSubjects(updatedSubjects);
    console.log('[handleInputChange] Updated subjects:', updatedSubjects);
  };

  // 수정된 데이터를 저장하는 함수
  const handleSaveChanges = async () => {
    if (window.confirm('수정하시겠습니까?')) { // 사용자 확인 팝업
      const token = getToken();
      const url = `${process.env.REACT_APP_API_URL}/admin/learning-status/update`;

      // 서버로 보낼 데이터 준비
      const updatedData = subjects.flatMap((subject) =>
        subject.subSubjects.map((subSubject) => ({
          id: subSubject.id,
          planDetails: subSubject.planDetails,
          feedbackDetails: subSubject.feedbackDetails,
        }))
      );

      console.log('[handleSaveChanges] Sending updated data to server:', updatedData);

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedData),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('[handleSaveChanges] Updated successfully:', result);

        alert('수정되었습니다!');

        // 데이터 다시 가져오기
        fetchLearningStatus();
      } catch (error) {
        console.error('[handleSaveChanges] Error updating data:', error);
        alert('수정에 실패했습니다.');
      }
    }
  };

  return (
    <div className="learning-status">
      <h2>WEEKLY PT REPORT</h2>

      {/* 학생 선택 */}
      <div>
        <h3>학생 선택</h3>
        <select
          onChange={(e) => setSelectedStudentId(e.target.value)}
          value={selectedStudentId || ''}
        >
          <option value="" disabled>
            학생 선택
          </option>
          {students.map((student) => (
            <option key={student.id} value={student.id}>
              {student.name}
            </option>
          ))}
        </select>
      </div>

      {/* 리포트 내용 */}
      <div className="report-content">
        <div className="styled-table-wrapper">
          <table className="styled-table">
            <thead>
              <tr>
                <th>과목</th>
                <th>세부 과목</th>
                <th>Plan (멘토생 기입)</th>
                <th colSpan="2">Feedback (멘토생 기입)</th>
              </tr>
            </thead>
            <tbody>
              {subjects.length > 0 ? (
                subjects.map((subject, subjectIndex) =>
                  subject.subSubjects.map((subSubject, subIndex) => (
                    <tr key={`${subjectIndex}-${subIndex}`}>
                      {subIndex === 0 && (
                        <td rowSpan={subject.subSubjects.length}>
                          {subject.subjectName || '과목 이름 없음'}
                        </td>
                      )}
                      <td>{subSubject.name || '세부 과목 이름 없음'}</td>
                      {/* Plan 입력란 */}
                      <td>
                        <input
                          type="text"
                          value={subSubject.planDetails || ''}
                          onChange={(e) =>
                            handleInputChange(
                              subjectIndex,
                              subIndex,
                              'planDetails',
                              e.target.value
                            )
                          }
                        />
                      </td>
                      {/* Feedback 입력란 */}
                      <td colSpan="2">
                        <input
                          type="text"
                          value={subSubject.feedbackDetails || ''}
                          onChange={(e) =>
                            handleInputChange(
                              subjectIndex,
                              subIndex,
                              'feedbackDetails',
                              e.target.value
                            )
                          }
                        />
                      </td>
                    </tr>
                  ))
                )
              ) : (
                <tr>
                  <td colSpan="5">과목 정보가 없습니다.</td>
                </tr>
              )}
            </tbody>
          </table>

          {/* 수정 버튼 */}
          <button onClick={handleSaveChanges}>수정하기</button>

          {/* 과목 추가하기 섹션 */}
          <div className="add-subject-section">
            <h3>과목 추가하기</h3>
            <input
              type="text"
              placeholder="과목 이름"
              value={newSubjectName}
              onChange={(e) => setNewSubjectName(e.target.value)}
            />
            <input
              type="text"
              placeholder="세부 과목 이름"
              value={newSubSubjectName}
              onChange={(e) => setNewSubSubjectName(e.target.value)}
            />
            <button onClick={() => alert('추가하기 기능 구현 필요')}>추가하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningStatus;
