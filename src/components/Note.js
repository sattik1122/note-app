import React from 'react'
import "./Note.css";
import deleteIcon from "../assets/delete.png"
let timer=500,timeout
function Note(props) { 
  const formatDate=(value)=>{
    const date=new Date(value)
    if(!value){
      return ""
    }
    let hrs=date.getHours();
    const monthNames=[
      'jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec'
    ]
    let ampm=hrs>12?"PM":"AM"
    hrs=hrs?hrs:"12"
    hrs=hrs>12?hrs=24-hrs:hrs
    let min=date.getMinutes();
    min=min<10?"0"+min:min
    let day=date.getDate();
    const month=monthNames[date.getMonth()]
    return `${hrs}:${min}  ${ampm} ${day} ${month}`
  }

  const debounce=(func)=>{
    clearTimeout(timeout)
    timeout=setTimeout(func,timer)
  }
  const updateText=(text,id)=>{
    debounce(()=>props.updateText(text,id))
  }

  return (
    <div className='note' style={{backgroundColor:props.note.color}}>
      <textarea className="note_text" defaultValue={props.note.text} onChange={(event)=>updateText(event.target.value,props.note.id)}/>
      <div className="note_footer">
      <p>{formatDate(props.note.time)}</p>
      <img src={deleteIcon} alt="" onClick={()=>props.deleteNote(props.note.id)}/>
      </div>
      
    </div>
  )
}

export default Note
