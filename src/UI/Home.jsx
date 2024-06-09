import ModelItem from "../components/ModelItem";
import models from "../UX/models";
import React, { useState } from "react";

function getCurrentYear() {
  const date = new Date(); // Create a new Date object representing the current date and time
  const year = date.getFullYear(); // Get the full year from the date object
  return year; // Return the year
}

function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className="hero-section flex h-96 flex-col items-center justify-center font-mono text-white">
        <h1 className="mb-2 text-xl font-bold  sm:text-4xl lg:text-6xl">
          Welcome to Mercedes-Benz
        </h1>
        <p className="xs:text-xl xm:text-2xl mb-2 text-lg lg:text-4xl">
          The best or nothing.
        </p>
        <a
          href="#models"
          className="mb-3 inline-block rounded-full bg-white px-6 py-2 text-center font-medium text-black hover:bg-gray-300"
        >
          Explore Models
        </a>
      </div>

      {/* Featured Models Section */}
      <div className="container mx-auto flex-grow px-4 py-10">
        <h2 className="mb-10 text-center text-3xl font-bold lg:text-5xl">
          Featured Models
        </h2>
        <div
          id="models"
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {models.map((model) => (
            <ModelItem
              key={model.id}
              name={model.name}
              description={model.description}
              image={model.image}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black p-4 text-center text-white">
        <p>© {getCurrentYear()} Mercedes-Benz. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
