/**
파일명 : counselingrow.js
파일 내용 : 상담 row 화면
작성자 : 정여진
초기 작성일 : 2025-03-10
최종 수정일 :
*/


import React from 'react';
import styles from './SubjectTable.module.css';

function CounselingRow({ subject, row, onDelete, onUpdate }) {
  return (
    <tr>
      <td>{subject}</td>
      <td>
        <input
          type="text"
          value={row.detail}
          className={styles.inputField}
          onChange={(e) => onUpdate('detail', e.target.value)} // 상태 업데이트
        />
      </td>
      <td>
        <input
          type="text"
          value={row.plan}
          className={styles.inputField}
          onChange={(e) => onUpdate('plan', e.target.value)} // 상태 업데이트
        />
      </td>
      <td>
        <input
          type="text"
          value={row.doAction}
          className={styles.inputField}
          onChange={(e) => onUpdate('doAction', e.target.value)} // 상태 업데이트
        />
      </td>
      <td>
        <input
          type="text"
          value={row.feedback}
          className={styles.inputField}
          onChange={(e) => onUpdate('feedback', e.target.value)} // 상태 업데이트
        />
      </td>
      <td>
        <input
          type="text"
          value={row.score}
          className={styles.inputField}
          onChange={(e) => onUpdate('score', e.target.value)} // 상태 업데이트
        />
      </td>
      <td>
        <button onClick={onDelete} className={styles.deleteRowBtn}>삭제</button>
      </td>
    </tr>
  );
}

export default CounselingRow;
