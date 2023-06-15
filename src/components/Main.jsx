import React from "react";
import Students from "./Students";
import AddStudent from "./AddStudent";
import { useState, useEffect } from "react";

function Main() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [showAddStudent, setShowAddStudent] = useState(false);

  // Fetch students
  useEffect(() => {
    const fetchStudent = async () => {
      const res = await fetch("http://localhost:8080/api/v1/student/all");
      const data = await res.json();

      setStudents(data);
    };

    fetchStudent();
  });

  // Delete student

  const deleteStudent = async (id) => {
    await fetch(`http://localhost:8080/api/v1/student/remove/${id}`, {
      method: "DELETE",
    });
  };

  //Add Students
  const addStudent = async (student) => {
    const res = await fetch("http://localhost:8080/api/v1/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    });
  };

  return (
    <div className="main">
      <div className="main-header">
        <h1>Student Manager</h1>
        <button
          className="add-btn"
          onClick={() => setShowAddStudent(!showAddStudent)}
        >
          Add
        </button>
      </div>
      {showAddStudent && <AddStudent onAdd={addStudent} />}
      {students.length ? (
        <Students students={students} onDelete={deleteStudent} />
      ) : (
        <h1 style={{ textAlign: "center" }}>No student</h1>
      )}
    </div>
  );
}

export default Main;
