import { useState } from 'react';

import Events from './components/Events/Events';
import MainHeader from './components/MainHeader/MainHeader';
import { CartContext } from './components/contextos/context';

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addItemHandler(item) {
    setCartItems((prevItems) => [...prevItems, item]);
  }

  function removeItemHandler(itemId) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  // Objeto con propiedades para pasar al contexto CartContext
  const CartCtxValue = {
    cartItems: cartItems,
    onAddItemToCart: addItemHandler,
    onRemoveItemFromCart: removeItemHandler,
  }

  return (
    <CartContext.Provider value={CartCtxValue}>
      <MainHeader />
      <main>
        <Events />
      </main>
    </CartContext.Provider>
  );
}

export default App;
