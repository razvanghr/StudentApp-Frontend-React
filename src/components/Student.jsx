import { AiOutlineClose } from "react-icons/ai";

function Student({ student, onDelete }) {
  return (
    <div className="student">
      <div className="student-info">
        <h1>{student.name}</h1>
        <p>{student.adress}</p>
      </div>
      <AiOutlineClose
        style={{ color: "red", cursor: "pointer", fontSize: "20px" }}
        onClick={() => onDelete(student.id)}
      />
    </div>
  );
}

export default Student;
