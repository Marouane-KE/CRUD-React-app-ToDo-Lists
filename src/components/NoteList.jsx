import React from "react";

function NoteList({ noteList, preperToEditNote, dleteNote }) {
  return (
    <ul id="myUL">
            {noteList.map((i) => (
              <li key={i.id}>
                <span>{i.note}</span>
                <div className="btnDiv">
                  <span className="edit" onClick={() => preperToEditNote(i.id)}>
                    Edit
                  </span>
                  <span className="close" onClick={() => dleteNote(i.id)}>
                    ×
                  </span>
                </div>
              </li>
            ))}
          </ul>
  );
}

export default NoteList;
