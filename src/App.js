import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import { calculateTotal, getCartItems } from './features/cart/cartSlice';

function App() {
  const { items, loading } = useSelector((state) => state.cart);
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [items]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      {isOpen && <Modal />}
      <CartContainer />
    </div>
  );
}

export default App;
