
import './App.css';
import { useState,useEffect } from 'react';
import Sidebar from './components/Sidebar';
import NoteContainer from './components/NoteContainer';
function App() {
  const [notes,setNotes]=useState(JSON.parse(localStorage.getItem('notes-app')) || [])
  const addNote=(color)=>{
    const tempNotes=[...notes]
    tempNotes.push({
      id:Date.now()+""+Math.floor(Math.random()*78),
      text:"",
      time:Date.now(),
      color,
    })
    setNotes(tempNotes)
  }
  const deleteNote=(id)=>{
    const temNotes=[...notes]
    const index=temNotes.findIndex((item)=>item.id===id)
    if(index<0){
      return 
    }
    temNotes.splice(index,1)
    setNotes(temNotes)
  }
  const updateText=(text,id)=>{
    const temNotes=[...notes]
    const index=temNotes.findIndex((item)=>item.id===id)
    if(index<0){
      return 
    }
    temNotes[index].text=text
    setNotes(temNotes)
  }
useEffect(()=>{
  localStorage.setItem('notes-app',JSON.stringify(notes))
},[notes])
  return (
    <div className="App">
      <Sidebar addNote={addNote}/>
      <NoteContainer notes={notes} deleteNote={deleteNote} updateText={updateText}/>
    </div>
  );
}

export default App;
