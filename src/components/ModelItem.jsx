function ModelItem({ name, description, image }) {
  return (
    <div className="rounded-lg bg-gray-100 p-6 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
      {/* Image Container */}
      <div className="flex justify-center">
        <img
          src={image}
          alt={name}
          className="mb-4 h-48 w-full rounded-md object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="text-center">
        <h3 className="mb-2 text-xl font-semibold">{name}</h3>
        <p className="mb-4">{description}</p>

        {/* Learn More Button */}
        <button
          disabled={true}
          className="mt-4 rounded-full bg-black px-4 py-2 text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:hover:bg-gray-600"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default ModelItem;
