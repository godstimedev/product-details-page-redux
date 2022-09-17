import { ProductCon } from '../styles/Product.styles';
import { decrement, increment, checkOut } from '../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import ImgSlider from './ImgSlider';

function ProductDetails() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  const id = cartItems[0].id;
  const count = cartItems[0].count;
  return (
    <ProductCon>
      <div className='left'>
        <div className='cont'>
          <ImgSlider />
        </div>
      </div>
      <div className='right'>
        <p className='p1'>Sneaker Company</p>
        <h1>{cartItems[0].title}</h1>
        <p className='p2'>{cartItems[0].det}</p>
        <div className='prices'>
          <div className='price'>
            <h3>${cartItems[0].currPrice}.00</h3>
            <span>{cartItems[0].discount}</span>
          </div>
          <small>{cartItems[0].prevPrice}</small>
        </div>
        <div className='counter'>
          <div className='count'>
            <span
              onClick={() => {
                if (count > 0) {
                  dispatch(decrement({ id }));
                } else {
                  return;
                }
              }}
            >
              -
            </span>
            <span>{count}</span>
            <span
              onClick={() => {
                dispatch(increment({ id }));
              }}
            >
              +
            </span>
          </div>
          <div className='button'>
            <button
              onClick={() => {
                dispatch(checkOut());
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </ProductCon>
  );
}

export default ProductDetails;
