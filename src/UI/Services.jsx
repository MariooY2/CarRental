function Services() {
    return (
        <div className="flex flex-col items-center text-gray-700">
            {/* Header Section */}
            <div className="bg-gray-200 w-full text-center p-12">
                <h1 className="text-4xl font-bold text-black mb-3">Mercedes-Benz Services</h1>
                <p className="text-xl">Dedicated to perfection in all we do.</p>
            </div>

            {/* Content Section */}
            <div className="w-full py-10 px-4 md:px-20">
                <section className="mb-10">
                    <h2 className="text-3xl font-bold mb-4">Maintenance & Repairs</h2>
                    <p className="text-md leading-relaxed mb-4">
                        Ensure your Mercedes stays in perfect condition with our comprehensive maintenance and repair services. 
                        Our technicians are certified and use only genuine Mercedes-Benz parts.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-3xl font-bold mb-4">Customization</h2>
                    <p className="text-md leading-relaxed">
                        Tailor your Mercedes to your personal taste with our customization options. From performance modifications to 
                        aesthetic enhancements, personalize your vehicle to suit your style.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-3xl font-bold mb-4">Mercedes-Benz Financial Services</h2>
                    <p className="text-md leading-relaxed">
                        Explore a range of financing options and insurance products designed to protect and accommodate your 
                        investment, ensuring peace of mind with your Mercedes-Benz experience.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4">Roadside Assistance</h2>
                    <p className="text-md leading-relaxed">
                        Benefit from round-the-clock support with Mercedes-Benz Roadside Assistance. Whether you're facing a 
                        flat tire or need emergency repairs, we're just a call away.
                    </p>
                </section>
            </div>

            {/* Footer Section */}
            <footer className="bg-black w-full text-white text-center p-4 mt-auto">
                <p>Experience the best care for your luxury vehicle.</p>
            </footer>
        </div>
    );
}

export default Services;
