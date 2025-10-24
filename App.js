import React, { useState } from "react";
const employees = [
  { id: 1, name: "Alice Johnson", role: "Software Engineer", email: "alice@example.com" },
  { id: 2, name: "Bob Smith", role: "Data Analyst", email: "bob@example.com" },
  { id: 3, name: "Charlie Brown", role: "UI/UX Designer", email: "charlie@example.com" },
  { id: 4, name: "David Miller", role: "Backend Developer", email: "david@example.com" },
];
function App() {
  const [search, setSearch] = useState("");

  const filteredEmployees = employees.filter(
   
    (emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.role.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Employee Directory</h2>
      <input
        type="text"
        placeholder="Search by name, role, or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", width: "300px", marginBottom: "20px" }}
      />
      <ul>
        {filteredEmployees.map((emp) => (
          <li key={emp.id} style={{ margin: "10px 0", listStyle: "none" }}>
            <strong>{emp.name}</strong> — {emp.role} ({emp.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;