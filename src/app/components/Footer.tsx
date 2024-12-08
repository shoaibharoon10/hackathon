import React from 'react'

const Footer = () => {
  return (
    <div className='py-[30px]'>
    <footer className="w-full bg-white border-t border-gray-200 py-8 px-12">
      <div className="max-w-[1183px] mx-auto grid grid-cols-4 gap-8">
        {/* Left Section */}
        <div>
          <h1 className="text-2xl font-bold text-black mb-4">Funiro.</h1>
          <address className="text-[#9F9F9F] not-italic leading-6">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </address>
        </div>

        {/* Links Section */}
        <div>
          <h2 className="text-lg font-semibold text-[#9F9F9F] mb-4">Links</h2>
          <ul className="space-y-2 text-black">
            <li><a href="#" className="hover:text-black">Home</a></li>
            <li><a href="#" className="hover:text-black">Shop</a></li>
            <li><a href="#" className="hover:text-black">About</a></li>
            <li><a href="#" className="hover:text-black">Contact</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h2 className="text-lg font-semibold text-[#9F9F9F] mb-4">Help</h2>
          <ul className="space-y-2 text-black-600">
            <li><a href="#" className="hover:text-black">Payment Options</a></li>
            <li><a href="#" className="hover:text-black">Returns</a></li>
            <li><a href="#" className="hover:text-black">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Subscription Section */}
        <div>
          <h2 className="text-lg font-semibold text-[#9F9F9F] mb-4">Newsletter</h2>
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
  )
}

export default Footer


{/* <footer className="footer bg-base-200 text-base-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
 */}


//  import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-white border-t border-gray-200">
//       {/* Main Footer Content */}
//       <div className="max-w-[1183px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-10">
//         {/* Left Section */}
//         <div>
//           <h2 className="text-4xl text-black font-bold">Funiro.</h2>
//           <p className="mt-4 text-gray-500">
//             400 University Drive Suite 200 Coral Gables,
//             <br />
//             FL 33134 USA
//           </p>
//         </div>

//         {/* Links Section */}
//         <div>
//           <h3 className="text-sm font-semibold text-black uppercase mb-4">Links</h3>
//           <ul className="space-y-2 text-gray-600">
//             <li>
//               <a href="#" className="hover:text-black">Home</a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-black">Shop</a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-black">About</a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-black">Contact</a>
//             </li>
//           </ul>
//         </div>

//         {/* Help Section */}
//         <div>
//           <h3 className="text-sm font-semibold text-black uppercase mb-4">Help</h3>
//           <ul className="space-y-2 text-gray-600">
//             <li>
//               <a href="#" className="hover:text-black">Payment Options</a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-black">Returns</a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-black">Privacy Policies</a>
//             </li>
//           </ul>
//         </div>

//         {/* Newsletter Section */}
//         <div>
//           <h3 className="text-sm font-semibold text-black uppercase mb-4">Newsletter</h3>
//           <form className="flex flex-col space-y-4">
//             <div className="relative">
//               <input
//                 type="email"
//                 placeholder="Enter Your Email Address"
//                 className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
//               />
//               <div className="absolute inset-y-0 right-0 flex items-center pr-4">
//                 <button
//                   type="submit"
//                   className="text-gray-600 font-medium hover:text-black"
//                 >
//                   SUBSCRIBE
//                 </button>
//               </div>
//             </div>
//             <hr className="border-gray-300" />
//           </form>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="bg-gray-100 py-6">
//         <p className="text-center text-gray-500 text-sm">
//           © 2023 Funiro. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
