import React from "react";

function InputForm({ note, setNote, trueIsAdd, handleEdit,idEdit, addNote }) {
  return (
    <div id="myDIV" className="header">
    <h2>My To Do List</h2>
    <from>
      <input
        type="text"
        id="myInput"
        placeholder="Your Note..."
        onChange={(e) => setNote(e.target.value)}
        value={note}
      />

      {trueIsAdd ? (
        <button
          onClick={() => {
            handleEdit(idEdit);
          }}
          className="addBtn"
        >
          save
        </button>
      ) : (
        <button onClick={addNote} className="addBtn">
          Add Note
        </button>
      )}
    </from>
  </div>
  );
}

export default InputForm;
