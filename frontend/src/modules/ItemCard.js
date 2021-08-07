import './ItemCard.css'

export function ItemCard(probs){
    return <section>
        <h3>{probs.description}</h3>
        <button>back</button>
        <button>next</button>
    </section>
}