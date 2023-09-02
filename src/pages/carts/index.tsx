// Cart.tsx
import React from 'react';
import { useCartContext } from 'src/components/context/cartContext';
import css from './cart.module.scss'


function Cart() {
  const { cartItems, updateCartItemQuantity, remove } = useCartContext();

  return (
    <div className={css['cart']}>
      <h1 style={{ textAlign: 'center' }}>Your Cart</h1>
      <table style={{ width: '100%' }}>
        <thead>
          <tr className={css['cart-title']}>
            <th>Name</th>
            <th>Img</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td ><img src={item.image} /></td>
              <td>{item.price} $</td>
              <td>
                {item.quantity > 1 ? <button onClick={() => updateCartItemQuantity(item.id, -1)} className={css['minus']}>-</button> : <button onClick={() => remove(item.id)} className={css['minus']}>-</button>}
                
                <span className={css['cart-quantity']}>{item.quantity}</span>
                <button onClick={() => updateCartItemQuantity(item.id, 1)} className={css['plus']}>+</button>
              </td>
              <td>{(item.price * item.quantity).toLocaleString()} $</td>
              <td><button onClick={() => remove(item.id)} className={css['button-delete']}>Delete</button></td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}
export default Cart
