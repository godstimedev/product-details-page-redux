import React from 'react';
import { CartCon } from '../styles/Cart.styles';
import Delete from '../assets/icon-delete.svg';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { clearCart } from '../features/cart/cartSlice';

function Cart() {
  // const dispatch = useDispatch();
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
            <img
              className='del'
              src={Delete}
              alt='/'
              onClick={() => window.location.reload(false)}
            />
          </div>
          <button>Checkout</button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </CartCon>
  );
}

export default Cart;
