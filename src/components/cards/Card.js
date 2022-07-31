export default function Card({title, amount}) {


    return <div className="card-container">
        <div className="card-title">{title}</div>
        <div className="card-amount">{amount}</div>
    </div>
}