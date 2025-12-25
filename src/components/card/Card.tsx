import './card.css'

export default function Card() {
    return (
        <div className="card-container">
            <div className='card-image'>
                <img src='./src/assets/iphone.jpg'></img>
            </div>
            <div className='card-desc'>
                <p>Description</p>
                <h4>price</h4>
                <button>Buy</button>
            </div>


        </div>
    )
}