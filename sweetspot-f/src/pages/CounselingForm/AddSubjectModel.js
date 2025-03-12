import React, { useState } from 'react';
import styles from './CounselingForm.module.css';

export default function AddSubjectModal({ subjectOptions, onClose, onSubmit, onAddNewSubject }) {
  const [selectedOption, setSelectedOption] = useState('existing'); // 기존 과목 or 새 과목 선택
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedDetails, setSelectedDetails] = useState([]);
  const [customInput, setCustomInput] = useState('');

  const [newSubjectName, setNewSubjectName] = useState('');
  const [newDetails, setNewDetails] = useState([]);

  const handleSubmit = () => {
    if (selectedOption === 'existing') {
      const details = selectedDetails
        .filter(detail => detail.checked)
        .map(detail => detail.value === '기타' ? customInput || '기타' : detail.value);

      onSubmit(selectedSubject, details.length > 0 ? details : ['기타']);
    } else if (selectedOption === 'new') {
      onAddNewSubject(newSubjectName, newDetails.length > 0 ? newDetails : ['기타']);
      onSubmit(newSubjectName, newDetails.length > 0 ? newDetails : ['기타']); // 새 과목 추가 후 바로 표 생성
    }
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h3>과목 추가</h3>
        <div>
          <label>
            <input
              type="radio"
              value="existing"
              checked={selectedOption === 'existing'}
              onChange={() => setSelectedOption('existing')}
            />
            기존 과목 선택
          </label>
          <label>
            <input
              type="radio"
              value="new"
              checked={selectedOption === 'new'}
              onChange={() => setSelectedOption('new')}
            />
            새 과목 추가
          </label>
        </div>

        {selectedOption === 'existing' && (
          <>
            <select onChange={(e) => setSelectedSubject(e.target.value)}>
              <option value="">과목 선택</option>
              {Object.keys(subjectOptions).map((subject) => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>

            {selectedSubject && (
              <div className={styles.detailsSection}>
                <h4>세부 내용 선택 ({selectedSubject})</h4>
                {subjectOptions[selectedSubject].map((detail) => (
                  <label key={detail}>
                    <input
                      type="checkbox"
                      checked={selectedDetails.some(d => d.value === detail)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedDetails([...selectedDetails, { value: detail, checked: true }]);
                        } else {
                          setSelectedDetails(selectedDetails.filter(d => d.value !== detail));
                        }
                      }}
                    />
                    {detail}
                    {detail === '기타' && (
                      <input
                        type="text"
                        value={customInput}
                        onChange={(e) => setCustomInput(e.target.value)}
                        placeholder="직접 입력"
                      />
                    )}
                  </label>
                ))}
              </div>
            )}
          </>
        )}

        {selectedOption === 'new' && (
          <>
            <input
              type="text"
              value={newSubjectName}
              onChange={(e) => setNewSubjectName(e.target.value)}
              placeholder="새 과목 이름 입력"
            />
            <h4>세부 내용 입력</h4>
            {[...newDetails, { value: '', checked: true }].map((detail, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={detail.value}
                  placeholder={`세부 내용 ${index + 1}`}
                  onChange={(e) => {
                    const updatedDetails = [...newDetails];
                    updatedDetails[index] = { ...detail, value: e.target.value };
                    setNewDetails(updatedDetails);
                  }}
                />
                {index === newDetails.length - 1 && (
                  <button onClick={() => setNewDetails([...newDetails])}>+</button>
                )}
              </div>
            ))}
          </>
        )}

        <div className={styles.modalButtons}>
          <button onClick={onClose}>취소</button>
          <button onClick={handleSubmit}>추가</button>
        </div>
      </div>
    </div>
  );
}
