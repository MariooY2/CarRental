function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center bg-black text-white h-96">
                <h1 className="text-4xl font-bold mb-2">Welcome to Mercedes-Benz</h1>
                <p className="text-xl">The best or nothing.</p>
                <button className="mt-4 bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-300">Explore Models</button>
            </div>

            {/* Featured Models Section */}
            <div className="flex-grow container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center mb-10">Featured Models</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-100 p-6 rounded-lg text-center">
                        <h3 className="text-xl font-semibold mb-2">Mercedes-AMG GT</h3>
                        <p className="mb-4">Experience a breathtaking design and thrilling performance.</p>
                        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Learn More</button>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg text-center">
                        <h3 className="text-xl font-semibold mb-2">Mercedes-Benz C-Class</h3>
                        <p className="mb-4">The epitome of modern luxury and comfort.</p>
                        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Learn More</button>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg text-center">
                        <h3 className="text-xl font-semibold mb-2">Mercedes-Benz SLS AMG</h3>
                        <p className="mb-4">Iconic, powerful and elegant.</p>
                        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Learn More</button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-black text-white text-center p-4">
                <p>© 2024 Mercedes-Benz. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
