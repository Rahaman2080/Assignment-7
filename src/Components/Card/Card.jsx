import PropTypes from 'prop-types';


const Card = ({card}) => {
    const {img, title, details, price, credit_time} = card;
    return (
        <div className="w-80 h-96 rounded-md m-4 p-3 bg-white text-center">
                <div className="space-y-4">
                    <img className="w-full rounded-md" src={img} alt="" />
                    <h2 className="font-bold text-lg">{title}</h2>
                    <p className="text-sm text-gray-600">{details}</p>
                    <div className="flex justify-between">
                    <p>Price: {price}</p>
                    <p>Credit: {credit_time}hr</p>
                    </div>
                    <button className="bg-[#2F80ED] px-24 py-1 rounded-md font-bold text-white">Select</button>
                </div>
            </div>
    );
};
Card.propTypes = {
    card:PropTypes.object.isRequired
}
export default Card;