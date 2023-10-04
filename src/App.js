import "./App.css";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import InputForm from "./components/InputForm";
import NoteList from "./components/NoteList";
function App() {
  const [note, setNote] = useState("");
  const [noteList, setNoteList] = useState([]);
  const [trueIsAdd, setTrueIsAdd] = useState(false);
  const [idEdit, setIdEdit] = useState("");

  // addNote
  const addNote = () => {
    const ids = uuid();
    let uni = ids.slice(0, 8);
    let item = { id: uni, note: note };
    setNoteList([...noteList, item]);
    setNote("");
    console.log(noteList);
  };

  // preperToEditNote
  const preperToEditNote = (id) => {
    console.log("false");
    setTrueIsAdd(true);
    const found = noteList.find((note) => note.id === id);
    setNote(found.note);
    setIdEdit(id);
  };

  // editNote
  const handleEdit = (idEdit) => {
    setTrueIsAdd(false);
    const found = noteList.find((note) => note.id === idEdit);
    found.note = note;
    setNote("");
    localStorage.setItem("noteList", JSON.stringify(noteList));
    console.log(noteList)
    
  };

  // dleteNote
  const dleteNote = (id) => {
    const updatedNoteList = noteList.filter((note) => note.id !== id);
    localStorage.setItem("noteList", JSON.stringify(updatedNoteList));
    setNoteList(updatedNoteList);
    setTrueIsAdd(false);
    // console.log(result)
  };

  //save data to localStorage
  useEffect(() => {
    if (noteList.length) {
      localStorage.setItem("noteList", JSON.stringify(noteList));
    }
  },[noteList]);

  //lode data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("noteList");
    if (savedData) {
      console.log(savedData);
      setNoteList(JSON.parse(savedData));
    }
  }, []);

  return (
    <div className="App">
      <div className="contaner">
        <div className="outerBox">
        

          <InputForm
            note={note}
            setNote={setNote}
            trueIsAdd={trueIsAdd}
            handleEdit={handleEdit}
            idEdit={idEdit}
            addNote={addNote}
          />


          <NoteList
            noteList={noteList}
            preperToEditNote={preperToEditNote}
            dleteNote={dleteNote}
          />

          
        </div>
      </div>
    </div>
  );
}

export default App;
