import PropTypes from 'prop-types';
import {FiDollarSign,} from 'react-icons/fi'
import {BsBook} from 'react-icons/bs'


const Card = ({card, handleSelectBtn}) => {
    const {img, title, details, price, credit_time} = card;
    return (
        <div className="w-72 h-96 rounded-md mx-2 p-3 bg-white text-center m-2">
                <div className="space-y-4">
                    <img className="w-full rounded-md" src={img} alt="" />
                    <h4 className="font-bold text-lg">{title}</h4>
                    <p className="text-sm text-gray-600">{details}</p>
                    <div className="flex justify-between items-center">
                     <p className='flex items-center gap-2'><span><FiDollarSign></FiDollarSign> </span>Price: {price}</p>
                    <p className='flex items-center gap-2'><span><BsBook></BsBook></span>Credit: {credit_time}hr</p>
                    </div>
                    <button onClick={() =>handleSelectBtn(card)} className="bg-[#2F80ED] px-24 py-1 rounded-md font-bold text-white">Select</button>
                </div>
            </div>
    );
};
Card.propTypes = {
    card:PropTypes.object.isRequired,
    handleSelectBtn : PropTypes.func
}
export default Card;