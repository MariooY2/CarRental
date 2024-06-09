import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, clearCart } from '../UX/cartSlice'; // Ensure clearCart is imported

function Cart() {
    const cartItems = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();
    const total = cartItems.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0).toFixed(2);
    
    const isCartEmpty = cartItems.length === 0;
    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    };

    const handleUpdateQuantity = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity }));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="container mx-auto mt-10">
            <div className="flex shadow-md my-10">
                <div className="w-full bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                        <h2 className="font-semibold text-2xl">{cartItems.length} Items</h2>
                    </div>
                    <div className="flex mt-10 mb-5">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                    </div>
                    {cartItems.map((item) => (
                        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" key={item.id}>
                            <div className="flex w-2/5">
                                <div className="flex flex-col justify-between ml-4 flex-grow">
                                    <span className="font-bold text-sm">{item.name}</span>
                                    <button onClick={() => handleRemoveItem(item.id)} className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</button>
                                </div>
                            </div>
                            <div className="flex justify-center w-1/5">
                                <input 
                                    className="mx-2 border text-center w-8" 
                                    type="number" 
                                    value={item.quantity} 
                                    onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value) || 1)}
                                />
                            </div>
                            <span className="text-center w-1/5 font-semibold text-sm">${item.price.toFixed(2)}</span>
                        </div>
                    ))}
                   <div className="flex justify-end mt-10 space-x-1 md:space-x-4">
    <button
        disabled={isCartEmpty}
        onClick={handleClearCart}
        className={`bg-red-500 hover:bg-red-700 text-white font-bold py-0 px-1 md:px-4 rounded ${isCartEmpty ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
        Clear Cart
    </button>
    <button
        disabled={isCartEmpty}
        className={`bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-0 px-1 md:px-4 rounded ${isCartEmpty ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
        Order
    </button>

                        <div className="font-semibold sm:text-2xl text-lg">Total Cost: ${total}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
