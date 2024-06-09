function Contact() {
  function getCurrentYear() {
    const date = new Date(); // Create a new Date object representing the current date and time
    const year = date.getFullYear(); // Get the full year from the date object
    return year; // Return the year
  }
  return (
    <div className="flex flex-col items-center text-gray-700">
      {/* Header Section */}
      <div className="w-full bg-gray-800 p-12 text-center text-white">
        <h1 className="mb-3 text-4xl font-bold">Contact Us</h1>
        <p className="text-xl">We're here to help you with your needs.</p>
      </div>

      {/* Content Section */}
      <div className="w-full px-4 py-10 md:px-20">
        <section className="mb-10">
          <div className="flex  items-center justify-center bg-gray-800" style={{ minHeight: '90vh' }}>
            <form
              action="#"
              method="POST"
              className="w-full max-w-lg space-y-6 rounded-lg bg-white p-8 shadow-lg"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-lg shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-lg shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  className="mt-1 resize-none block w-full rounded-md border border-gray-300 px-4 py-3 text-lg shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={true}
                  className="flex w-full justify-center rounded-md border border-transparent bg-sky-600 px-4 py-3 text-lg font-medium text-white shadow-sm opacity-50 cursor-not-allowed hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <footer className="mt-auto w-full bg-gray-800 p-4 text-center text-white">
        <p>© {getCurrentYear()} Mercedes-Benz. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;
