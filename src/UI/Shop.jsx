import products from "../UX/products";
import React, { useState } from "react";
import { useNavigation } from 'react-router-dom';
import Spinner from "../components/Spinner";
function Shop() {
  const [selectedCar, setSelectedCar] = useState(products[0]); // Default to the first car
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  console.log(navigation.state)
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white"
      style={{ backgroundColor: "#1A202C", color: "#FFF" }}
    >
      <div className="flex w-full max-w-7xl flex-wrap justify-center p-4">
        <div className="flex flex-col space-y-4 rounded-lg bg-opacity-20 p-4 backdrop-blur-lg backdrop-filter">
          {products.map((car) => (
            <button
              key={car.id}
              onClick={() => setSelectedCar(car)}
              className={`w-full p-3 text-left ${selectedCar.id === car.id ? "bg-blue-600 text-white" : "bg-white text-gray-900"} rounded-lg shadow-sm transition-colors hover:border-blue-500 hover:bg-blue-500 hover:shadow-md`}
            >
              {car.name}
            </button>
          ))}
        </div>
        
        <div className="mt-4 flex flex-col justify-center rounded-lg lg:ml-4 lg:mt-0">
          <div className="flex justify-center">
            {isLoading?<Spinner/>:<img
              src={selectedCar.imageUrl}
              alt={selectedCar.name}
              className="h-64 w-full max-w-md rounded-lg object-cover"
            />}
            
          </div>

          <div className="p-4 text-center lg:text-left">
            <h2 className="flex justify-center text-3xl font-bold">
              {selectedCar.name}
            </h2>
            <p className="block h-12 overflow-hidden overflow-ellipsis text-ellipsis">
              {selectedCar.description}
            </p>
            <div className="flex items-center justify-center">
              <button
                onClick={() => console.log("Add to Cart:", selectedCar)}
                className="mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white shadow hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
