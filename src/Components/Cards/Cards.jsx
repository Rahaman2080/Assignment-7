import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Cards = ({handleSelectBtn}) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("./data.json")
        .then(res => res.json())
        .then(data => setCards(data))
    }, []);


    return (
        <div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3"> 
            {
                cards.map((card) => <Card 
                key={card.id} 
                card={card}
                handleSelectBtn ={handleSelectBtn}
                ></Card>)
            }
            </div>
        </div>
    );
};

Cards.propTypes = {
    handleSelectBtn: PropTypes.func
}
export default Cards;