import Cart from './components/Cart.jsx';
import Header from './components/Header.jsx';
import Meals from './components/Meals.jsx';
import { CartContextProvider } from './components/store/CartContext.jsx';
import Checkout from './components/store/Checkout.jsx';
import { UserProgressContextProvider } from './components/store/UserProgressContext.jsx';
function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart /> 
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;