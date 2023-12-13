import { useContext, useState } from 'react';
import Cart from '../Cart/Cart';
import classes from './MainHeader.module.css';
import { CartContext } from '../contextos/context';
import { ItemContext } from '../contextos/context';

function MainHeader() {
  const [modalIsOpen, setModalIsOpen] = useState();

  function openCartModalHandler() {
    setModalIsOpen(true);
  }

  function closeCartModalHandler() {
    setModalIsOpen(false);
  }

  // Obtener el objeto cartItems del contexto CartContext
  const numCartItems = useContext(CartContext);

  // Obtener la longitud del array cartItems del contexto CartContext
  const numLength = numCartItems.cartItems.length;

  // Objeto ItemsValue con funciones y datos para pasar al contexto ItemContext
  const ItemsValue = {
    onClose: closeCartModalHandler,
    Items: numCartItems.cartItems
  }

  return (
    <>
      <header className={classes.header}>
        <h1>StateEvents Shop</h1>
        <button onClick={openCartModalHandler}>Cart ({numLength})</button>
      </header>

      {/* Proveedor de contexto ItemContext con el valor ItemsValue */}
      <ItemContext.Provider value={ItemsValue}>
        {/* Renderizar el componente Cart solo si modalIsOpen es true */}
        {modalIsOpen && <Cart/>}
      </ItemContext.Provider>
    </>
  );
}

export default MainHeader;