import React, { useState } from 'react';

function Cart() {
    // Placeholder data to simulate cart items
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Mercedes-Benz C-Class', quantity: 1, unitPrice: 41000, totalPrice: 41000 },
        { id: 2, name: 'Mercedes-Benz GLE', quantity: 2, unitPrice: 61000, totalPrice: 122000 }
    ]);

    // Calculate the total cost of the cart
    const totalCost = cartItems.reduce((total, item) => total + item.totalPrice, 0).toFixed(2);

    // Function to handle removing item from cart
    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    // Function to update item quantity in cart
    const handleUpdateQuantity = (id, quantity) => {
        const updatedItems = cartItems.map(item => {
            if (item.id === id) {
                const updatedTotalPrice = item.unitPrice * quantity;
                return { ...item, quantity, totalPrice: updatedTotalPrice };
            }
            return item;
        });
        setCartItems(updatedItems);
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
                                {/* Product Name and Model */}
                                <div className="flex flex-col justify-between ml-4 flex-grow">
                                    <span className="font-bold text-sm">{item.name}</span>
                                    <button onClick={() => handleRemoveItem(item.id)} className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</button>
                                </div>
                            </div>
                            <div className="flex justify-center w-1/5">
                                {/* Quantity Input */}
                                <input 
                                    className="mx-2 border text-center w-8" 
                                    type="number" 
                                    value={item.quantity} 
                                    onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value) || 1)}
                                />
                            </div>
                            <span className="text-center w-1/5 font-semibold text-sm">${item.unitPrice.toFixed(2)}</span>
                            <span className="text-center w-1/5 font-semibold text-sm">${item.totalPrice.toFixed(2)}</span>
                        </div>
                    ))}
                    <div className="flex justify-end mt-10">
                        <div className="font-semibold text-2xl">Total Cost: ${totalCost}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
