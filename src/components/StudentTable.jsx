import StudentRow from './StudentRow';

function StudentTable({ students, updateScore }) {
  return (
    <div className="panel">
      <div className="panel-header">
        <span>STUDENT RECORDS</span>
        <span style={{ color: 'var(--cyan)' }}>{students.length} entries</span>
      </div>
      <table className="student-table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>SCORE</th>
            <th>STATUS</th>
            <th>UPDATE</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentRow
              key={student.id}
              student={student}
              updateScore={updateScore}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;