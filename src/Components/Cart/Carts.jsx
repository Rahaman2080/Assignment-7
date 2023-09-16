
import PropTypes from 'prop-types';

const Carts = ({cardTitle, residual, totalHour,totalPrice}) => {
    return (
        <div>
            <div className="w-72 h-auto bg-white rounded-md m-4 p-4">
                <h3 className="text-xl font-bold text-blue-700 py-3">Hour remaining {residual} hr</h3>
                <hr className='h-0.5 bg-gray-400'></hr>
                <h3 className="text-xl font-bold py-3">Course name:</h3>
                {
                    cardTitle.map( cart => 
                        (<li key={cart.id} className='list-decimal' >{cart.title}</li>))
                }
                <hr className='h-0.5 bg-gray-400'></hr>
                <h3 className='text-xl font-bold  py-3'>Total credit hour: {totalHour} hr</h3>
                <hr className='h-0.5 bg-gray-400'></hr>
                <h3 className='text-xl font-bold py-3'>Total price: {totalPrice} USD</h3>

            </div>
        </div>
    );
};
Carts.propTypes = {
    cardTitle: PropTypes.array,
    residual: PropTypes.number,
    totalHour: PropTypes.number,
    totalPrice: PropTypes.number
}
export default Carts;