
import React from "react";

// Initial student data
const studentList = [
  { slno: 1, name: "stud1", usn: "rvce1", tmarks: 150 },
  { slno: 2, name: "stud2", usn: "rvce2", tmarks: 145 }
];

// Component to display one student row
class StudentRow extends React.Component {
  render() {
    const student = this.props.student;

    return (
      <tr>
        <td>{student.slno}</td>
        <td>{student.name}</td>
        <td>{student.usn}</td>
        <td>{student.tmarks}</td>
      </tr>
    );
  }
}

// Component to display student table
class StudentsTable extends React.Component {
  render() {
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
          {this.props.students.map((student) => (
            <StudentRow
              key={student.slno}
              student={student}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

// Component to add a student
class StudentAddSubmit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      usn: "",
      tmarks: ""
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const student = {
      name: this.state.name,
      usn: this.state.usn,
      tmarks: this.state.tmarks
    };

    this.props.addStudent(student);

    this.setState({
      name: "",
      usn: "",
      tmarks: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
          required
        />

        <input
          type="text"
          placeholder="USN"
          value={this.state.usn}
          onChange={(e) => this.setState({ usn: e.target.value })}
          required
        />

        <input
          type="number"
          placeholder="Total Marks"
          value={this.state.tmarks}
          onChange={(e) => this.setState({ tmarks: e.target.value })}
          required
        />

        <button type="submit">Add</button>
      </form>
    );
  }
}

// Main component
class StudentListTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: studentList
    };
  }

  addStudent = (student) => {
    const newStudent = {
      ...student,
      slno: this.state.students.length + 1
    };

    this.setState({
      students: [...this.state.students, newStudent]
    });
  };

  render() {
    return (
      <div>
        <h2>Student List</h2>

        <StudentsTable students={this.state.students} />

        <hr />

        <h3>Add Student</h3>

        <StudentAddSubmit addStudent={this.addStudent} />
      </div>
    );
  }
}

export default StudentListTable;
