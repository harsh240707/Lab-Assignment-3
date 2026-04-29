import { useState } from 'react';

function StudentRow({ student, updateScore }) {
  const [editVal, setEditVal] = useState(student.score);
  const isPass = student.score >= 40;

  const handleSave = () => {
    updateScore(student.id, editVal);
  };

  return (
    <tr className={isPass ? 'row-pass' : 'row-fail'}>
      <td style={{ fontWeight: 'bold' }}>{student.name}</td>
      <td className="score-text">{student.score}</td>
      
      <td>
        <div className={`badge ${isPass ? 'badge-pass' : 'badge-fail'}`}>
          <div className="dot"></div>
          {isPass ? 'PASS' : 'FAIL'}
        </div>
      </td>
      
      <td>
        <div className="update-controls">
          <input
            type="number"
            value={editVal}
            onChange={(e) => setEditVal(e.target.value)}
            className="score-input"
          />
          <button onClick={handleSave} className="btn-save">SAVE</button>
        </div>
      </td>
    </tr>
  );
}

export default StudentRow;