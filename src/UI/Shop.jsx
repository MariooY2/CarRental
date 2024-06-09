import products from "../UX/products";
import { useState } from "react";
import { useNavigation } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useDispatch } from 'react-redux';
import { addItem } from "../UX/cartSlice"
function Shop() {
  const [selectedCar, setSelectedCar] = useState(products[0]); // Default to the first car
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const dispatch = useDispatch();
  const filteredCars = products.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    // Filter cars directly here using the new search term
    const updatedFilteredCars = products.filter((car) =>
      car.name.toLowerCase().includes(newSearchTerm.toLowerCase()),
    );

    // Now update the selected car based on the newly filtered list
    if (updatedFilteredCars.length >= 1) {
      setSelectedCar(updatedFilteredCars[0]);
    }
  };
  const handleAddToCart = () => {
    dispatch(addItem({
      id: selectedCar.id,
      name: selectedCar.name,
      price: selectedCar.price,
      quantity: 1 // Assuming you're adding one item at a time
    }));
  };
  return (
    <>
    
    <div
      className="flex min-h-screen flex-col items-center  text-white bg-sky-800 "
      >
        <div className="text-center mt-4 mb-4 text-stone-100">
            <h1 className="lg:text-5xl text-3xl">Welcome to My Shop!</h1>
            <p className="lg:text-3xl text-xl mt-3 py-3">Discover exclusive, high-quality products tailored to enhance your lifestyle and interests</p>
        </div>
      <div className="flex w-full max-w-7xl flex-wrap justify-center p-4">
        <input
          type="text"
          placeholder="Search for a car..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="mb-4 w-full rounded-lg p-2 text-gray-900 sm:p-3 md:mb-2 lg:mb-0"
        />
        <div className="flex flex-col space-y-4 rounded-lg bg-opacity-20 p-4 backdrop-blur-lg backdrop-filter">
          {filteredCars.map((car) => (
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
            {isLoading ? (
              <Spinner />
            ) : (
              <img
                src={selectedCar.imageUrl}
                alt={selectedCar.name}
                className="h-64 w-full max-w-md rounded-lg object-cover"
              />
            )}
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
               onClick={handleAddToCart}
                className="mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white shadow hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Shop;
