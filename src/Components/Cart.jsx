import React from 'react'
import './Cart.css'
import { useCart } from 'react-use-cart'

const Cart = () => {
    const {items,isEmpty,totalUniqueItems,totalItems,cartTotal,updateItemQuantity,removeItem,emptyCart,} =useCart();
    if (isEmpty) return <h3 className='text-title text-center fw-bold'>My Cart is Empty</h3>

  return (
    <section id='cart'>
    <div className='container-fluid'>
        <div className="row justify-content-center">
          <h4 className='text-center py-4 text-decoration-underline'>My Cart</h4>
            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 py-4 shadow">
                <div className="d-flex justify-content-center py-2">
                <p className='position-relative fw-bolder text-title m-3'>Cart  <span className='position-absolute translate-middle rounded-pill badge bg-danger mx-1 '>{totalUniqueItems}</span></p>
                <p className='position-relative fw-bolder text-title m-3'>Total Items  <span className='position-absolute translate-middle rounded-pill badge bg-primary mx-1 '>{totalItems}</span></p>
            </div>
            <div className='d-flex justify-content-between py-3'>
            <button  onClick={() =>emptyCart()} className='btn btn-outline-danger ms-3'>Clear All</button>


              <h1 className='text-danger'>Total Price :${cartTotal}</h1>
            </div>
            <div className="">
            <table className="table table-primary table-hover m-0">
              <tbody>
                {items.map((item,index)=>{
                return(
                  <tr key={index}>
                    <td><img src={item.img} alt={item.title}/></td>
                    <td>{item.title}</td>
                    <td>{` ${item.price} $`}</td>
                    <td>Quantity : {item.quantity}</td>
                    <td>
                      <button onClick={() =>updateItemQuantity(item.id,item.quantity+1)} className='btn btn-outline-dark ms-1'>+</button>
                      <button  onClick={() =>updateItemQuantity(item.id,item.quantity-1)} className='btn btn-outline-dark ms-1'>-</button>
                      <button  onClick={() =>removeItem(item.id)} className='btn btn-outline-danger ms-3'>Remove Item</button>
                    </td>
                    
                  </tr>

                )
                })}
              </tbody>
            </table>
  </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Cart