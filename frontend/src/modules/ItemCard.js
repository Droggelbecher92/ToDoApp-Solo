import './ItemCard.css'

export function ItemCard(probs){

    function buttonNext(){
        probs.nextTodo(probs.todo.id)
    }

    return <section className="itemcard">
        <h3 className="itemcard__text">{probs.todo.description}</h3>
        <button onClick={buttonNext}>next</button>
    </section>
}