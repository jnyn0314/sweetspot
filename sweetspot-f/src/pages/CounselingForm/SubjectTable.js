/**
파일명 : subjecttable.js
파일 내용 : 과목 테이블 프론트 화면
작성자 : 정여진
초기 작성일 : 2025-03-10
최종 수정일 :
*/

import React, { useState } from 'react';
import styles from './CounselingForm.module.css';

export default function SubjectTable({ subject, initialDetails, onDelete }) {
  const [details, setDetails] = useState([...initialDetails]);

  const addRow = () => {
    const newDetails = [...details];
    newDetails.push(''); // Feedback 행 위에 새 행 추가
    setDetails(newDetails);
  };

  const deleteRow = (index) => {
    const confirmDelete = window.confirm('삭제하시겠습니까?');
    if (confirmDelete) {
      const newDetails = details.filter((_, i) => i !== index);
      setDetails(newDetails);
    }
  };

  const handleDeleteTable = () => {
    const confirmDelete = window.confirm('표를 삭제하시겠습니까?');
    if (confirmDelete) {
      onDelete();
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
          {details.map((detail, index) => (
            <tr key={index}>
              <td>{index === 0 ? subject : ''}</td>
              <td>
                <textarea
                                  className={styles.textArea}
                                  value={detail}
                                  onChange={(e) => {
                                    const newDetails = [...details];
                                    newDetails[index] = e.target.value;
                                    setDetails(newDetails);
                                  }}
                                />
                              </td>
                              <td><textarea className={styles.textArea} /></td>
                              <td><textarea className={styles.textArea} /></td>
                              <td><textarea className={styles.textArea} /></td>
                              <td><input type="number" className={styles.numberInput} /></td>
                              <td><textarea className={styles.textArea} /></td>
                              <td>
                                <button onClick={() => deleteRow(index)} className={styles.deleteButton}>삭제</button>
                              </td>
                            </tr>
                          ))}
                          {/* Feedback 행 */}
                          <tr className={styles.feedbackRow}>
                            <td>Feedback</td>
                            <td colSpan="6">
                              <textarea
                                className={styles.feedbackTextArea}
                                placeholder="이곳에 Feedback 내용을 작성하세요."
                              />
                            </td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>

                      {/* 테이블 하단 컨트롤 */}
                      <div className={styles.tableControls}>
                        <button onClick={addRow} className={styles.addButton}>+ 행 추가</button>
                        <button onClick={handleDeleteTable} className={styles.deleteTableButton}>표 삭제</button>
                      </div>
                    </div>
                  );
                }