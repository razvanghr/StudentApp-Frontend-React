import React from "react";
import { useState } from "react";

function AddStudent({ onAdd }) {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please add student name");
      return;
    }

    if (!adress) {
      alert("Please add student location");
      return;
    }

    onAdd({ name, adress });

    setAdress("");
    setName("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Student</label>
        <input
          type="text"
          placeholder="Add Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Location</label>
        <input
          type="text"
          placeholder="Add Location"
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
        />
      </div>
      <button>Add Student</button>
    </form>
  );
}

export default AddStudent;
