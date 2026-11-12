
import React, { useState } from "react";

// Initial student data
const studentList = [
  { slno: 1, name: "stud1", usn: "rvce1", tmarks: 150 },
  { slno: 2, name: "stud2", usn: "rvce2", tmarks: 145 }
];

// Component to display one student row
function StudentRow({ student }) {
  return (
    <tr>
      <td>{student.slno}</td>
      <td>{student.name}</td>
      <td>{student.usn}</td>
      <td>{student.tmarks}</td>
    </tr>
  );
}

// Component to display student table
function StudentsTable({ students }) {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Sl No</th>
          <th>Student Name</th>
          <th>USN</th>
          <th>Total Marks</th>
        </tr>
      </thead>

      <tbody>
        {students.map((student) => (
          <StudentRow
            key={student.slno}
            student={student}
          />
        ))}
      </tbody>
    </table>
  );
}

// Component to add a student
function StudentAddSubmit({ addStudent }) {
  const [name, setName] = useState("");
  const [usn, setUsn] = useState("");
  const [tmarks, setTmarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const student = {
      name: name,
      usn: usn,
      tmarks: tmarks
    };

    addStudent(student);

    // Clear form
    setName("");
    setUsn("");
    setTmarks("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="USN"
        value={usn}
        onChange={(e) => setUsn(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Total Marks"
        value={tmarks}
        onChange={(e) => setTmarks(e.target.value)}
        required
      />

      <button type="submit">Add</button>
    </form>
  );
}

// Main component
function StudentListTable() {
  const [students, setStudents] = useState(studentList);

  const addStudent = (student) => {
    const newStudent = {
      ...student,
      slno: students.length + 1
    };

    setStudents([...students, newStudent]);
  };

  return (
    <div>
      <h2>Student List</h2>

      <StudentsTable students={students} />

      <hr />

      <h3>Add Student</h3>

      <StudentAddSubmit addStudent={addStudent} />
    </div>
  );
}

export default StudentListTable;
