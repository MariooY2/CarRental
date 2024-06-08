function Contact() {
    return (
        <div className="flex flex-col items-center text-gray-700">
            {/* Header Section */}
            <div className="bg-gray-800 w-full text-center p-12 text-white">
                <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
                <p className="text-xl">We're here to help you with your needs.</p>
            </div>

            {/* Content Section */}
            <div className="w-full py-10 px-4 md:px-20">
                <section className="mb-10">
                    <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <p className="mb-4">Fill out the form below and our team will get back to you as soon as possible.</p>
                            <form action="#" method="POST" className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input type="text" name="name" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" name="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea name="message" id="message" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-700 mb-4">Other Ways to Reach Us:</p>
                            <ul className="text-md">
                                <li><strong>Phone:</strong> +1 800 123 4567</li>
                                <li><strong>Email:</strong> support@mercedesbenz.com</li>
                                <li><strong>Location:</strong> 123 Benz Lane, Stuttgart, Germany</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer Section */}
            <footer className="bg-gray-800 w-full text-white text-center p-4 mt-auto">
                <p>© 2024 Mercedes-Benz. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Contact;
