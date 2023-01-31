import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    console.log('cartwidget');

    const { getQuantity } = useContext(CartContext)

    return(
        <Link to='/cart' className="CartWidget">
            <img src="/images/cart.svg" alt='cart' className='CartImg'/>
            { getQuantity() }
        </Link>
    );
}

export default CartWidget