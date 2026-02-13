import { useState } from "react";

const UserStateFullExercise = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("az");

  const addStudent = (e) => {
    e.preventDefault();

    if (!name.trim() || !studentId.trim()) {
      alert("Please enter Name and ID");
      return;
    }

    const newStudent = {
      id: studentId,
      name: name,
      grades: { math: "", science: "", english: "" },
    };

    setStudents((prev) => [...prev, newStudent]);
    setName("");
    setStudentId("");
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  const updateGrade = (id, subject, value) => {
    const numValue = Number(value);
    if (numValue < 0 || numValue > 100) return;

    setStudents((prev) =>
      prev.map((student) =>
        student.id === id
          ? {
              ...student,
              grades: { ...student.grades, [subject]: numValue },
            }
          : student
      )
    );
  };

  const calculateAverage = (grades) => {
    const values = Object.values(grades).filter(
      (g) => g !== "" && !isNaN(g)
    );

    if (values.length === 0) return 0;

    const avg =
      values.reduce((a, b) => a + Number(b), 0) / values.length;

    return avg.toFixed(2);
  };

  const getLetter = (avg) => {
    const num = Number(avg);
    if (num >= 90) return "A";
    if (num >= 80) return "B";
    if (num >= 70) return "C";
    if (num >= 60) return "D";
    return "F";
  };

  const filteredStudents = students
    .filter((student) =>
      student.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "az"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  const averages = students.map((student) =>
    Number(calculateAverage(student.grades))
  );

  const classAverage =
    averages.length > 0
      ? (
          averages.reduce((a, b) => a + b, 0) / averages.length
        ).toFixed(2)
      : 0;

  const highest =
    averages.length > 0 ? Math.max(...averages).toFixed(2) : 0;

  const lowest =
    averages.length > 0 ? Math.min(...averages).toFixed(2) : 0;

  const gradeCount = { A: 0, B: 0, C: 0, D: 0, F: 0 };

  averages.forEach((avg) => {
    gradeCount[getLetter(avg)]++;
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Student Management System</h1>

      <form onSubmit={addStudent}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />

        <button type="submit">Add Student</button>
      </form>

      <br />

      <input
        type="text"
        placeholder="Search by Name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="az">Sort A-Z</option>
        <option value="za">Sort Z-A</option>
      </select>

      <hr />

      {filteredStudents.length === 0 && <p>No Data</p>}

      {filteredStudents.map((student) => {
        const avg = calculateAverage(student.grades);
        const letter = getLetter(avg);

        return (
          <div
            key={student.id}
            style={{
              border: "1px solid black",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>{student.name}</h3>
            <p>ID: {student.id}</p>
            <p>Average: {avg}</p>
            <p>Grade Letter: {letter}</p>

            <input
              type="number"
              placeholder="Math"
              min="0"
              max="100"
              onChange={(e) =>
                updateGrade(student.id, "math", e.target.value)
              }
            />

            <input
              type="number"
              placeholder="Science"
              min="0"
              max="100"
              onChange={(e) =>
                updateGrade(student.id, "science", e.target.value)
              }
            />

            <input
              type="number"
              placeholder="English"
              min="0"
              max="100"
              onChange={(e) =>
                updateGrade(student.id, "english", e.target.value)
              }
            />

            <br />
            <button onClick={() => deleteStudent(student.id)}>
              Delete
            </button>
          </div>
        );
      })}

      <hr />

      <h2>Class Statistics</h2>
      <p>Class Average: {classAverage}</p>
      <p>Highest Average: {highest}</p>
      <p>Lowest Average: {lowest}</p>

      <h4>Grade Distribution:</h4>
      <ul>
        {Object.entries(gradeCount).map(([grade, count]) => (
          <li key={grade}>
            {grade}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserStateFullExercise;
