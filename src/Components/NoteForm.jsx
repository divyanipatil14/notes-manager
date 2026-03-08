import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../redux/noteslice";
import { v4 as uuidv4 } from "uuid";
function NoteForm() {
const dispatch =useDispatch();
 const [title ,setTitle] = useState("");
 const [description,SetDescription] = useState("");
 const handleSubmit =(e) =>{
    e.preventDefault();
    dispatch(
        createNote({
            id:uuidv4(),
            title,
            description,
            important:false,
            createdAt:new Date().toISOString()
        }));
        
        setTitle("");
        SetDescription("");
 }
  
    return(
        <>
        <form onSubmit={handleSubmit}>
              <div class="form-group">
    <input type="text" className="form-control mt-4"  placeholder="Add Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
  </div>
  <div class="form-group">
    <input type="text" className="form-control mt-4"  placeholder="Add Description" value={description} onChange={(e)=>SetDescription(e.target.value)}/>
  </div>
    <button className="mt-3">Add Note</button>
        </form></>
    );
}
export default NoteForm