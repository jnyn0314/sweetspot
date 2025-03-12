import React, { useState } from 'react';
import SubjectTable from './SubjectTable';
import AddSubjectModal from './AddSubjectModel';
import styles from './CounselingForm.module.css';

const initialSubjectOptions = {
  국어: ['문학', '독서', '화작', '언매', '기타'],
  영어: ['문법', '듣기', '독해', '기타'],
  수학: ['수1', '수2', '미적', '확통', '기하', '기타'],
  물리: ['역학', '비역학', '기타'],
  화학: ['기타'],
  생명: ['유전', '비유전', '기타'],
  지구과학: ['기타'],
  생활과윤리: ['기타'],
  윤리와사상: ['기타'],
  한국지리: ['기타'],
  세계지리: ['기타'],
  세계사: ['기타'],
  동아시아사: ['기타'],
  경제: ['기타'],
  정치와법: ['기타'],
  사회문화: ['기타'],
  한국사: ['기타']
};

export default function CounselingForm() {
  const [subjectOptions, setSubjectOptions] = useState(initialSubjectOptions);
  const [tables, setTables] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddTable = (subject, details) => {
    setTables([...tables, { subject, details }]);
  };

  const handleAddNewSubject = (newSubject, newDetails) => {
    setSubjectOptions({
      ...subjectOptions,
      [newSubject]: newDetails.length > 0 ? newDetails : ['기타']
    });
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <button className={styles.addButton} onClick={() => setShowModal(true)}>
        + 새 과목 추가
      </button>

      {tables.map((table, index) => (
        <SubjectTable
          key={index}
          subject={table.subject}
          initialDetails={table.details}
          onDelete={() => setTables(tables.filter((_, i) => i !== index))}
        />
      ))}

      {showModal && (
        <AddSubjectModal
          subjectOptions={subjectOptions}
          onClose={() => setShowModal(false)}
          onSubmit={handleAddTable}
          onAddNewSubject={handleAddNewSubject} // 새 과목 추가 핸들러 전달
        />
      )}
    </div>
  );
}
