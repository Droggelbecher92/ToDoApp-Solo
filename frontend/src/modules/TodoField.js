import './TodoField.css'
import {ItemCard} from "./ItemCard";

export function TodoField(props){
    return <section>
        <h2>{props.title}</h2>
        {props.todos.map(todo => <ItemCard key = {todo.id} todo={todo} />)}

    </section>
}