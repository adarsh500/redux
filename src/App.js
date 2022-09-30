import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { calculateTotal } from './features/cart/cartSlice';

function App() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [items]);

  return (
    <div className="App">
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
