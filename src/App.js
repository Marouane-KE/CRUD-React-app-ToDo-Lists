import "./App.css";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [note, setnote] = useState("");
  const [noteList, setNoteList] = useState([]);
  const [trueIsAdd, setTrueIsAdd] = useState(false);
  const [idEdit, setIdEdit] = useState('');
  useEffect(() => {
    const savedData = localStorage.getItem('noteList');
    if (savedData) {
      console.log(savedData)
      setNoteList(JSON.parse(savedData));
    }
  }, []);
  


  // const [idDelete , setId]=useState();

  // addNote
  const addNote = () => {
    const ids = uuid();
    let uni = ids.slice(0, 8);
    let item = { id: uni, note: note };
    setNoteList([...noteList, item]);
    setnote("");
    console.log(noteList);
  };

  // dleteNote
  const dleteNote = (id) => {
    const result = noteList.filter((note) => note.id !== id);
    localStorage.setItem('noteList',JSON.stringify(noteList))
    setNoteList(result);
    console.log(result)
  };


  // preperToEditNote
  const preperToEditNote = (id) => {
      console.log('false');     
       setTrueIsAdd(true);
      console.log(trueIsAdd);
  
    
    const found = noteList.find((note) => note.id === id);
    setnote(found.note);
    setIdEdit(id)
    
 
  };


  // editNote
const handleEdit = (idEdit)=>{
  setTrueIsAdd(false)
  const found = noteList.find((note) => note.id === idEdit);
  found.note=note
  setnote("");
}




//save data to localStorage
useEffect(()=>{
  if (noteList.length) {
    localStorage.setItem('noteList',JSON.stringify(noteList))
  }
},[noteList])






  return (
    <div className="App">
      <div className="contaner">
        <div className="outerBox">
          <div id="myDIV" className="header">
            <h2>My To Do List</h2>
            <from>
              <input
                type="text"
                id="myInput"
                placeholder="Your Note..."
                onChange={(e) => setnote(e.target.value)}
                value={note}
              />

              {trueIsAdd ? (
                <button onClick={()=>{
                  handleEdit(idEdit)
                }} className="addBtn">
                save
              </button>
              ) : (
                
                <button onClick={addNote} className="addBtn">
                Add Note
              </button>
              )}
            </from>
          </div>

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
        </div>
      </div>
    </div>
  );
}

export default App;
