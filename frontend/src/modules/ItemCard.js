import './ItemCard.css'

export function ItemCard(probs){

    function buttonNext(){
        probs.nextTodo(probs.todo.id)
    }

    return <section className="itemcard">
        <div>
            <h3 className="itemcard__text">{probs.todo.description}</h3>
        </div>

        <div>
            <button className="itemcard__btn" onClick={buttonNext}>next</button>
        </div>

    </section>
}