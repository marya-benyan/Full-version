import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-[#f8f8f8] py-16"> {/* تم تغيير الخلفية إلى لون فاتح */}
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <h1 className="text-4xl font-bold text-[#d39c94] text-center mb-8">
          CONTACT US
        </h1>
        <p className="text-lg text-[#d39c94] text-center mb-12">
          Home – Contact
        </p>

        {/* النموذج */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* النموذج */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-[#d39c94] mb-6">
              Contact For Any Queries
            </h2>
            <form>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d39c94]"
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d39c94]"
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d39c94]"
                />
              </div>
              <div className="mb-6">
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d39c94]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#d39c94] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#bc7265] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* معلومات الاتصال */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-[#d39c94] mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-[#d39c94] mb-6">
              Justo sed diam ut sed amet duo amet lorem amet stet sed ipsum, sed duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam et erat eilta ipsum justo sed.
            </p>
            <div className="space-y-6">
              {/* Store 1 */}
              <div>
                <h3 className="text-xl font-bold text-[#d39c94] mb-2">Store 1</h3>
                <ul className="text-lg text-[#d39c94]">
                  <li>Jordan - Amman</li>
                  <li>info@example.com</li>
                  <li>+012 345 67890</li>
                </ul>
              </div>

              {/* Store 2 */}
              <div>
                <h3 className="text-xl font-bold text-[#d39c94] mb-2">Store 2</h3>
                <ul className="text-lg text-[#d39c94]">
                  <li>Jordan - Amman</li>
                  <li>info@example.com</li>
                  <li>+012 345 67890</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;