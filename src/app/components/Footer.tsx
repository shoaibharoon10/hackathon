import React from 'react'

const Footer = () => {
  return (
  <div className='w-[1440px] h-[505px]:'>
    <div className='py-[30px]'>
    <footer className="w-full bg-white border-t border-gray-200 py-8 px-12">
      <div className="max-w-[1183px] mx-auto grid grid-cols-4 gap-8">
        {/* Left Section */}
        <div>
          <h1 className="text-2xl font-bold text-black mb-4 cursor-pointer">Funiro.</h1>
          <address className="text-[#9F9F9F] not-italic leading-6">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </address>
        </div>

        {/* Links Section */}
        <div>
          <h2 className="text-lg font-semibold text-[#9F9F9F] mb-4 cursor-pointer">Links</h2>
          <ul className="space-y-2 text-black">
            <li><a href="/" className="hover:text-black">Home</a></li>
            <li><a href="/shop" className="hover:text-black">Shop</a></li>
            <li><a href="/blog" className="hover:text-black">About</a></li>
            <li><a href="/contact" className="hover:text-black">Contact</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h2 className="text-lg font-semibold text-[#9F9F9F] mb-4 cursor-pointer">Help</h2>
          <ul className="space-y-2 text-black-600">
            <li><a href="#" className="hover:text-black">Payment Options</a></li>
            <li><a href="#" className="hover:text-black">Returns</a></li>
            <li><a href="#" className="hover:text-black">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Subscription Section */}
        <div>
          <h2 className="text-lg font-semibold text-[#9F9F9F] mb-4 cursor-pointer">Newsletter</h2>
          <form className="flex items-center gap-2 text-base">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
            <button
              type="submit"
              className="btn btn-primary text-sm px-6 py-2 text-black focus:ring-2 underline focus:ring-blue-400"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-200 px-24 pt-4 text-left text-gray-600 text-sm">
        2023 Funiro. All rights reserved.
      </div>
    </footer>
    </div>
  </div>
  )
}

export default Footer