import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Card from "../Card/Card";


const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("./data.json")
        .then(res => res.json())
        .then(data => setCards(data))
    }, []);


    return (
        <div className="flex flex-col lg:flex-row md:max-w-5xl lg:max-w-full mx-auto gap-8">
            <div className="grid md:grid-cols-1 lg:grid-cols-3"> 
            {
                cards.map((card) => <Card key={card.id} card={card}></Card>)
            }
            </div>
            <div>
            <Cart></Cart>
            </div>
        </div>
    );
};

export default Cards;