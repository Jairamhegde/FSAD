import { useEffect, useState } from "react";
import axios from "axios";

// json-server endpoint (default port is usually 5000 or 3001)
const API = "http://localhost:500/employees";

function App() {
  const [employees, setEmployees] = useState([]);
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  // 1. Fetch employees from the backend
  const fetchEmployees = async () => {
    try {
      const response = await axios.get(API);
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  // 2. Load employees on initial render
  useEffect(() => {
    fetchEmployees();
  }, []);

  // 3. Add new employee (POST) or Update existing employee (PUT)
  const addEmployee = async (e) => {
    e.preventDefault();

    const emp = {
      firstName: fname,
      lastName: lname,
      email: email
    };

    try {
      if (editId) {
        // Update existing record
        await axios.put(`${API}/${editId}`, emp);
        setEditId(null);
      } else {
        // Create new record
        await axios.post(API, emp);
      }

      // Clear input fields
      setfName("");
      setlName("");
      setEmail("");

      // Refresh list
      fetchEmployees();
    } catch (error) {
      console.error("Error saving employee:", error);
    }
  };

  // 4. Populate form to edit an employee
  const handleEdit = (emp) => {
    setEditId(emp.id);
    setfName(emp.firstName || emp.fname || "");
    setlName(emp.lastName || emp.lname || "");
    setEmail(emp.email || "");
  };

  // 5. Delete an employee
  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchEmployees();
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Employee Management</h2>

      {/* Form for Add / Update */}
      <div style={{ marginBottom: "20px" }}>
        <form onSubmit={addEmployee}>
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            value={fname}
            onChange={(e) => setfName(e.target.value)}
            required
            style={{ marginRight: "10px", padding: "6px" }}
          />
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            value={lname}
            onChange={(e) => setlName(e.target.value)}
            required
            style={{ marginRight: "10px", padding: "6px" }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ marginRight: "10px", padding: "6px" }}
          />
          <button type="submit" style={{ padding: "6px 12px", cursor: "pointer" }}>
            {editId ? "Update Employee" : "Add Employee"}
          </button>
          {editId && (
            <button
              type="button"
              onClick={() => {
                setEditId(null);
                setfName("");
                setlName("");
                setEmail("");
              }}
              style={{ marginLeft: "10px", padding: "6px 12px", cursor: "pointer" }}
            >
              Cancel
            </button>
          )}
        </form>
      </div>

      {/* Table displaying employees */}
      <div>
        <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{(emp.firstName || emp.fname) + " " + (emp.lastName || emp.lname)}</td>
                <td>{emp.email}</td>
                <td>
                  <button onClick={() => handleEdit(emp)} style={{ marginRight: "8px", cursor: "pointer" }}>
                    Edit
                  </button>
                  <button onClick={() => deleteEmployee(emp.id)} style={{ cursor: "pointer", color: "red" }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

