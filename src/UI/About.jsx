function About() {
    return (
        <div className="flex flex-col items-center text-gray-700">
            {/* Header Section */}
            <div className="bg-gray-200 w-full text-center p-12">
                <h1 className="text-4xl font-bold text-black mb-3">About Mercedes-Benz</h1>
                <p className="text-xl">Innovation and excellence since 1926.</p>
            </div>

            {/* Content Section */}
            <div className="w-full py-10 px-4 md:px-20">
                <section className="mb-10">
                    <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                    <p className="text-md leading-relaxed mb-4">
                        Mercedes-Benz is synonymous with luxury and precision engineering. 
                        Founded in the early 20th century, our dedication to quality has 
                        positioned us as a leader in the automotive industry. With a pioneering 
                        spirit and a commitment to innovation, Mercedes-Benz has introduced 
                        many technological and safety features that have become common in modern 
                        vehicles.
                    </p>
                    <p className="text-md leading-relaxed">
                        Our mission is to continue pushing the boundaries of automotive design 
                        and to offer the ultimate driving experience while promoting sustainable 
                        practices that respect the planet.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-3xl font-bold mb-4">Milestones</h2>
                    <ul className="list-disc list-inside">
                        <li>1926 - The merger of Benz & Cie. and Daimler Motors Corporation.</li>
                        <li>1954 - Introduction of the Mercedes-Benz 300 SL, known for its distinctive gull-wing doors.</li>
                        <li>1979 - Launch of the G-Class, a luxury off-road vehicle still popular today.</li>
                        <li>1997 - Debut of the F 200 Imagination, showcasing future car technologies.</li>
                        <li>2016 - Mercedes-Benz releases the E-Class with Drive Pilot, taking a significant step towards autonomous driving.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                    <p className="text-md leading-relaxed">
                        To lead in the creation of innovative and sustainable mobility solutions 
                        that enhance the quality of life for our customers. We are driven by a 
                        passion for excellence and a responsibility to the environment and society.
                    </p>
                </section>
            </div>

            {/* Footer Section */}
            <footer className="bg-black w-full text-white text-center p-4 mt-auto">
                <p>Connect with us on social media and discover the future of mobility.</p>
            </footer>
        </div>
    );
}

export default About;
