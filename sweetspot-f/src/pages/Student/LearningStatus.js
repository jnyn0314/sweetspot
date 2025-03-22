import React, { useState } from 'react';
    import './LearningStatus.css';
    import Calendar from 'react-calendar';
    import 'react-calendar/dist/Calendar.css';

    const LearningStatus = () => {
      const [subjects, setSubjects] = useState([
        { name: '국어', subSubjects: ['독서', '문학', '언매/화작'] },
        { name: '수학', subSubjects: ['수1', '수2', '미적분'] },
        { name: '영어', subSubjects: ['단어', '독해'] },
        { name: '물리', subSubjects: ['비역학', '역학'] },
        { name: '생명', subSubjects: ['비유전', '유전'] },
      ]);

      const [newSubjectName, setNewSubjectName] = useState('');
      const [newSubjectDetails, setNewSubjectDetails] = useState('');
      const [selectedChoice, setSelectedChoice] = useState('');
      const [subjectToDelete, setSubjectToDelete] = useState(null);

      const [date, setDate] = useState(new Date());
      const [weeklyReports, setWeeklyReports] = useState([
        { date: new Date(), subjects: [...subjects] }, // Initial report
      ]);
      const [selectedReport, setSelectedReport] = useState(weeklyReports[0]);

      const handleAddSubject = () => {
        if (newSubjectName.trim() !== '' && newSubjectDetails.trim() !== '') {
          const detailsArray = newSubjectDetails.split(',').map((item) => item.trim());
          setSubjects([...subjects, { name: newSubjectName, subSubjects: detailsArray }]);
          setNewSubjectName('');
          setNewSubjectDetails('');
        }
      };

      const handleChoiceSelect = (choice) => {
        setSelectedChoice(choice);
      };

      const handleDeleteSubject = (subjectName) => {
        setSubjectToDelete(subjectName);
      };

      const confirmDeleteSubject = () => {
        setSubjects(subjects.filter(subject => subject.name !== subjectToDelete));
        setSubjectToDelete(null);
      };

      const cancelDeleteSubject = () => {
        setSubjectToDelete(null);
      };

      const handleCreateNewReport = () => {
        const lastWeekSubjects = weeklyReports.length > 0 ? weeklyReports[weeklyReports.length - 1].subjects : subjects;
        const newReport = {
          date: new Date(),
          subjects: lastWeekSubjects.map(subject => ({ ...subject, subSubjects: [...subject.subSubjects] }))
        };
        setWeeklyReports([...weeklyReports, newReport]);
        setSelectedReport(newReport);
      };

      const handleReportSelect = (report) => {
        setSelectedReport(report);
        setDate(report.date);
      };

      const onChange = (date) => {
        setDate(date);
        // Find the report for the selected date
        const report = weeklyReports.find(report => report.date.toDateString() === date.toDateString());
        if (report) {
          setSelectedReport(report);
        } else {
          setSelectedReport(null);
        }
      };

      return (
        <div className="learning-status">
          <h2>WEEKLY PT REPORT</h2>
          <button onClick={handleCreateNewReport}>이번주 표 만들기</button>

          <div className="main-content">
          <div className="calendar">
              <h3>캘린더</h3>
              <Calendar onChange={onChange} value={date} />

              <h3>주간 목록</h3>
              <ul>
                {weeklyReports.map((report, index) => (
                  <li key={index} onClick={() => handleReportSelect(report)}>
                    {report.date.toLocaleDateString()}
                  </li>
                ))}
              </ul>
           </div>


            <div className="report-content">
              {selectedReport ? (
                <div className="styled-table-wrapper">
                  <table className="styled-table">
                    <thead>
                      <tr>
                        <th>과목</th>
                        <th>Plan (멘토생 기입)</th>
                        <th>Do (학생 기입)</th>
                        <th colSpan="2">Feedback (멘토생 기입)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedReport.subjects.map((subject) => (
                        <>
                          {subject.subSubjects.map((subSubject, index) => (
                            <tr key={`${subject.name}-${index}`}>
                              {index === 0 && (
                                <td rowSpan={subject.subSubjects.length}>
                                  {subject.name}
                                  <button onClick={() => handleDeleteSubject(subject.name)}>삭제</button>
                                </td>
                              )}
                              <td>{subSubject === '언매/화작' ? selectedChoice || '선택하세요' : subSubject}</td>
                              <td>
                                <div className="table-cell-content" contentEditable="true">
                                  계획 입력
                                </div>
                              </td>
                              <td>
                                <div className="table-cell-content" contentEditable="true">
                                  내용 입력
                                </div>
                              </td>
                              <td>
                                <div className="table-cell-content" contentEditable="true">
                                  점수 입력
                                </div>
                              </td>
                            </tr>
                          ))}
                        </>
                      ))}
                      <tr>
                        <td colSpan="5">
                          <div className="table-cell-content" contentEditable="true">
                            추가사항
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <p>선택된 주간 보고서가 없습니다.</p>
              )}
*/
              {/* 추가 과목 입력 폼 */} /*
              <div className="add-subject-form">
                <h3>과목 추가</h3>
                <input
                  type="text"
                  placeholder="과목 이름"
                  value={newSubjectName}
                  onChange={(e) => setNewSubjectName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="세부 내용 (쉼표로 구분)"
                  value={newSubjectDetails}
                  onChange={(e) => setNewSubjectDetails(e.target.value)}
                />
                <button onClick={handleAddSubject}>과목 추가</button>
              </div>


              <div className="choice-select">
                <h3>언매/화작 선택</h3>
                <label>
                  <input
                    type="radio"
                    value="언매"
                    checked={selectedChoice === '언매'}
                    onChange={() => handleChoiceSelect('언매')}
                    disabled={selectedChoice !== '' && selectedChoice !== '언매'}
                  />
                  언매
                </label>
                <label>
                  <input
                    type="radio"
                    value="화작"
                    checked={selectedChoice === '화작'}
                    onChange={() => handleChoiceSelect('화작')}
                    disabled={selectedChoice !== '' && selectedChoice !== '화작'}
                  />
                  화작
                </label>
              </div>
            </div>
          </div>

          {subjectToDelete && (
            <div className="delete-confirm-popup">
              <p>정말로 {subjectToDelete} 과목을 삭제하시겠습니까?</p>
              <button onClick={confirmDeleteSubject}>삭제</button>
              <button onClick={cancelDeleteSubject}>취소</button>
            </div>
          )}
        </div>
      );
    }

export default LearningStatus;
