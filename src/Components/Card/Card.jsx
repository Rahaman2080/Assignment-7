import PropTypes from 'prop-types'

const Card = ({card}) => {
    console.log(card);
    return (
        <div className="w-80 h-96 rounded-md m-4 p-3 bg-white text-center">
                <div className="space-y-4">
                    <img className="w-full rounded-md" src="https://i.ibb.co/2gSgXHD/c-programing.png" alt="" />
                    <h2 className="font-bold text-lg">Introduction to C Programming</h2>
                    <p className="text-sm text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <div className="flex justify-between">
                    <p>Price: 1500</p>
                    <p>Credit: 1hr</p>
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