import './Input.css'
import {postTodo} from "../services/requests";
import {useState} from "react";

export function Input(){
    const [description, setDescription] = useState('')

    const saveTyped = (event) => {
        setDescription(event.target.value)
    }

    return <section className="input">
        <input className="input__field" type="text" onChange={saveTyped}/>
        <button className="input__btn" onClick={()=>postTodo(description)}>ADD</button>
    </section>
}