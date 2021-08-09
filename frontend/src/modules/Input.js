import './Input.css'
import {useState} from "react";

export function Input(props){
    const [description, setDescription] = useState('')

    const saveTyped = (event) => {
        setDescription(event.target.value)
    }

    return <section className="input">
        <input className="input__field" type="text" onChange={saveTyped}/>
        <button className="input__btn" onClick={()=>props.addTodo(description)}>ADD</button>
    </section>
}