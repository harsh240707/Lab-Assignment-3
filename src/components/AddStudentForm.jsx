import { useState } from 'react';

function AddStudentForm({ addStudent }) {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || score === '') return; 
    addStudent(name, Number(score)); 
    setName('');
    setScore('');
  };

  return (
    <div className="panel">
      <div className="panel-header">
        <span>● REGISTER STUDENT</span>
        <span>NEW ENTRY</span>
      </div>
      <form onSubmit={handleSubmit} className="form-group">
        <input
          type="text"
          placeholder="Student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="terminal-input"
          required
        />
        <input
          type="number"
          placeholder="Score (0-100)"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          className="terminal-input"
          required
          min="0"
          max="100"
        />
        <button type="submit" className="btn-add">+ ADD</button>
      </form>
    </div>
  );
}

export default AddStudentForm;