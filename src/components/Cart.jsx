import React from 'react';
import { CartCon } from '../styles/Cart.styles';
import Delete from '../assets/icon-delete.svg';
import { useSelector } from 'react-redux';

function Cart() {
  // const [isChecked, setChecked] = useState(false);
  const { cartItems, total, isChecked } = useSelector((store) => store.cart);
  return (
    <CartCon>
      <p>Cart</p>
      <hr />
      {isChecked ? (
        <>
          <div className='items'>
            <img src={cartItems[0].thumbImg.img1} alt='' />
            <div>
              <p>{cartItems[0].title}</p>
              <div>
                <div>${cartItems[0].currPrice}.00</div> x{' '}
                <div>{cartItems[0].count}</div>
                <div>${total}</div>
              </div>
            </div>
            <img src={Delete} alt='/' />
          </div>
          <button>Checkout</button>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </CartCon>
  );
}

export default Cart;
