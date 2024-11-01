import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, resetItem } from './Store';

function Cart() {
  const cartProducts = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const [dpAmount, setDpAmount] = useState(0);

  const handleDiscountPer = (dvalue) => {
    setDpAmount(dvalue);
  };

  const items = cartProducts.map((product, index) =>
    <li key={index}>
      {product.name} - ${product.price.toFixed(2)} - Quantity:{product.quantity}  
      <button onClick={() => dispatch(increment(product))}> + </button>
      <button onClick={() => dispatch(decrement(product))}> - </button>
      <button onClick={() => dispatch(resetItem(product))}> Remove </button>
    </li>
  );

  const[couponCode,setCouponCode]=useState('');
  const[couponDiscountPercentage,setCouponDiscountPercentage]=useState(0);

  const handleCoupon=()=>{
    switch(couponCode){
      case 'SHIVA10':
        setCouponDiscountPercentage(10);
        break;
        case 'SHIVA20':
        setCouponDiscountPercentage(20);
        break;
        case 'SHIVA30':
        setCouponDiscountPercentage(30);
        break;
        default:
          alert('Invalid Coupon Code');
          setCouponDiscountPercentage(0);
    }
  }

  const calculateTotal = () => {
    const totalAmount = cartProducts.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discountAmount = (dpAmount / 100) * totalAmount;
    const couponDiscountAmount = (couponDiscountPercentage / 100) * totalAmount;
    const netAmount = totalAmount - discountAmount;
    const finalAmount=totalAmount-discountAmount-couponDiscountAmount;
    return {
      total: totalAmount.toFixed(2),
      discountAmount: discountAmount.toFixed(2),
      netAmount: netAmount.toFixed(2),
      finalAmount: finalAmount.toFixed(2),
    };
  };


  const { total, discountAmount, netAmount ,finalAmount} = calculateTotal();

  return (
    <>
      <h2>Shopping Cart</h2>
      {cartProducts.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>{items}</ul>
          <p>Total Before Discount: ${total}</p>
   <span> <button onClick={() => handleDiscountPer(10)}>Apply 10% Discount</button>  </span>
   <span> <button onClick={() => handleDiscountPer(20)}>Apply 20% Discount</button>  </span>
   <span> <button onClick={() => handleDiscountPer(30)}>Apply 30% Discount</button>  </span>   
          <p>Discount Percentage Applied: {dpAmount}%</p>
          <p>Discount Amount: ${discountAmount}</p>
          <p> Amount After Discount: ${netAmount}</p>
          <input type="text" value={couponCode} placeholder='Enter coupon code' onChange={(e)=>setCouponCode(e.target.value)}/>
          <button onClick={handleCoupon}>Apply Coupon</button>
          <p>Final Amount: ${finalAmount}</p>
        </>
      )}
    </>
  );
}

export default Cart;

