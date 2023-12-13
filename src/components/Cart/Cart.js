import ReactDOM from 'react-dom';
import classes from './Cart.module.css';
import {ItemContext} from '../contextos/context';
import { useContext } from 'react';

function Cart() {

  const CtxItems = useContext(ItemContext)

  // Calcular el total sumando los precios de todos los elementos en CtxItems.Items
  const total = CtxItems.Items.reduce((prevVal, item) => prevVal + item.price, 0)

  // Uso de ReactDOM.createPortal para renderizar el componente fuera del árbol DOM principal
  return ReactDOM.createPortal(
    <>
      <div className={classes.backdrop} onClick={CtxItems.onClose} />
      <aside className={classes.cart}>
        <h2>Your Cart</h2>
        <ul>
          {CtxItems.Items.map((item) => (
            <li key={item.id}>
              {item.title} (${item.price})
            </li>
          ))}
        </ul>
        <p className={classes.total}>Total: ${total}</p>
        <div className={classes.actions}>
          <button onClick={CtxItems.onClose}>Close</button>
          <button onClick={CtxItems.onClose}>Buy</button>
        </div>
      </aside>
    </>,
    document.getElementById("modal")
  );
}

export default Cart;
