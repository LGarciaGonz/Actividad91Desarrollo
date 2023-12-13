import dummyEvents from '../../data/dummy-events';
import EventItem from './EventItem';
import classes from './Events.module.css';
import {EventContext, CartContext} from '../contextos/context'
import { useContext } from 'react';

function Events({ onAddItemToCart, onRemoveItemFromCart, cartItems }) {

  const EventCtx = useContext(CartContext)

  return (
    <ul className={classes.events}>

      {dummyEvents.map((event) => (
        // Proporcionar un valor al contexto con varias propiedades
        <EventContext.Provider value={{
          key: event.id,
          event: event,
          isInCart: EventCtx.cartItems.some((item) => item.id === event.id),
          onAddToCart:() => EventCtx.onAddItemToCart(event),
          onRemoveFromCart:() => EventCtx.onRemoveItemFromCart(event.id),
      }}>
        <EventItem />
        </EventContext.Provider>
      ))}
    </ul>
  );
}

export default Events;
