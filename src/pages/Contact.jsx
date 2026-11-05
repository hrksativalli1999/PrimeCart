const Contact = () => {
  return (
    <div className="min-h-[70vh] bg-gray-50 px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-xl rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">We are here to help</p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-2 text-gray-600">Send us a message and we'll get back to you.</p>
        </div>
        <div className="space-y-4">
          <input type="text" placeholder="Name" className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
          <input type="email" placeholder="Email" className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
          <input type="tel" placeholder="Mobile Number" className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
          <textarea placeholder="Your Message" rows="5" className="w-full resize-none rounded-lg border border-gray-300 bg-gray-50 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"></textarea>
          <button className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 sm:w-auto">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
