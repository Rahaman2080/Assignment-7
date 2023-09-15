
import PropTypes from 'prop-types';
import Cart from './Cart';

const Carts = ({cardTitle}) => {
    return (
        <div>
            <div className="w-72 h-auto bg-white rounded-md m-4 p-4">
                <h3 className="text-xl font-bold text-blue-700 py-3">Hour remaining {}hr</h3>
                <hr className='h-0.5 bg-gray-400'></hr>
                <h3 className="text-xl font-bold py-3">Course name:</h3>
                {
                    cardTitle.map( cart => <Cart key={cart.id} cart={cart}></Cart> )
                }
                <hr className='h-0.5 bg-gray-400'></hr>
                <h3 className='text-xl font-bold  py-3'>Total credit hour: {}</h3>
                <hr className='h-0.5 bg-gray-400'></hr>
                <h3 className='text-xl font-bold py-3'>Total price: {} USD</h3>

            </div>
        </div>
    );
};
Carts.propTypes = {
    cardTitle: PropTypes.array
}
export default Carts;