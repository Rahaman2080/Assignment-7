import PropTypes from 'prop-types';

const Cart = ({cart}) => {
    const {title} = cart;
    return (
        <>
            <div>
              <ol className='list-decimal px-4'>
                <li>{title}</li>
              </ol>
            </div>
        </>
    );
};

Cart.propTypes ={
    cart: PropTypes.object.isRequired
}
export default Cart;