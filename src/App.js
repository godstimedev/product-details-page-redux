// import { Routes } from 'react-router-dom';
import Nav from './components/Nav';
import ProductDetails from './components/ProductDetails';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';
import { useEffect } from 'react';
import Modal from './components/Modal';

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);
  return (
    <>
      {isOpen && <Modal />}
      <Nav />
      <ProductDetails />
    </>
  );
}

export default App;
