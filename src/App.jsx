import { useState } from 'react';
import Header from './components/Header';
import AddStudentForm from './components/AddStudentForm';
import StudentTable from './components/StudentTable';
import './App.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Aman', score: 78 },
    { id: 2, name: 'Riya', score: 45 },
    { id: 3, name: 'Karan', score: 90 },
    { id: 4, name: 'Neha', score: 32 },
  ]);

  const addStudent = (name, score) => {
    const newStudent = { id: Date.now(), name, score };
    setStudents([...students, newStudent]);
  };

  const updateScore = (id, newScore) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, score: Number(newScore) } : student
      )
    );
  };

  // Calculate Dashboard Stats
  const totalStudents = students.length;
  const passedStudents = students.filter(s => s.score >= 40).length;
  const avgScore = totalStudents === 0 ? 0 : 
    Math.round(students.reduce((acc, curr) => acc + curr.score, 0) / totalStudents);

  return (
    <div className="app-container">
      <Header />
      
      <AddStudentForm addStudent={addStudent} />

      {/* Dashboard Panel */}
      <div className="panel dashboard">
        <div className="stat-card">
          <div className="stat-title">TOTAL</div>
          <div className="stat-value">{totalStudents}</div>
        </div>
        <div className="stat-card">
          <div className="stat-title">PASSED</div>
          <div className="stat-value">{passedStudents}</div>
        </div>
        <div className="stat-card">
          <div className="stat-title">AVG SCORE</div>
          <div className="stat-value">{avgScore}</div>
        </div>
      </div>

      <StudentTable students={students} updateScore={updateScore} />
    </div>
  );
}

export default App;