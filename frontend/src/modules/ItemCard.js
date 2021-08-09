import './ItemCard.css'
import {putTodo} from "../services/requests";

export function ItemCard(probs){




    return <section className="itemcard">
        <h3 className="itemcard__text">{probs.todo.description}</h3>
        <button>back</button>
        <button>next</button>
    </section>
}