import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const CartItem = ({ cartItem }) => {

  const { removeFromCart } = useContext(CartContext);

  return (
    <tr className="cart-item">
      <td></td>
      <td className="cart-image">
        <img src={cartItem.img[0]} alt="" />
        <i className="bi bi-x delete-cart" onClick={() => removeFromCart(cartItem.id)}></i>
      </td>
      <td>{cartItem.name}</td>
      <td>${cartItem.price.toFixed(2)}</td>
      <td className="product-quantity">{cartItem.quantity}</td>
      <td className="product-subtotal">${(cartItem.price * cartItem.quantity).toFixed(2)}</td>
    </tr>
  );
};

export default CartItem;