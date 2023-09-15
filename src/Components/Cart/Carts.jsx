
import PropTypes from 'prop-types';



const Carts = ({cardTitle}) => {
    // console.log(cardTitle);
    return (
        <div>
            <div className="w-72 h-auto bg-white rounded-md m-4 text-left p-4">
                <h3 className="text-xl font-bold text-blue-700 text-center py-3"> Hour remaining</h3>
                <hr className='h-0.5 bg-gray-400'></hr>
                <h3 className="text-xl font-bold text-center">Course name</h3>
                {
                    cardTitle.map((card)=> <ol key={card.id} className=''>{card.title}</ol> )
                }
                <hr className='h-0.5 bg-gray-400'></hr>
                <h3 className='text-xl font-bold text-center py-3'>Total credit hour:</h3>

            </div>
        </div>
    );
};

Carts.propTypes = {
    cardTitle: PropTypes.object.isRequired
}
export default Carts;