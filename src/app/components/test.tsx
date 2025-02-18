import React from "react";
import Image from 'next/image'; 
import Card1 from "@/app/assets/card.png";
import { PRODUCTS_LIST as data } from "../lib/index";

const Products = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4 max-h-screen my-12 md:my-14">
      {data.slice(0, 8).map((product, index) => (
        <div key={index} className="group relative ">
          <div className="rounded-lg flex flex-col bg-white border border-gray-200 group-hover:opacity-30 group-hover:bg-gray-800 w-full h-full">
            <img
              className="rounded-t-lg w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1612837017391-8b9b6b0b0b0e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwc2FsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt={product.name}
            />

            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {product.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {product.tagline}
              </p>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-full">
                  {product.type === "new" ? "New" : "Sale"}
                </span>
                <div className="flex items-center">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    ${product.price}
                  </span>
                  {product.type === "sale" && (
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                      ${product.discountedPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute rounded-lg h-full w-full bg-black/40 flex items-center justify-center -bottom-8 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button className="bg-white/50 hover:bg-white/70 text-white/50 hover:text-white/70 rounded-full w-10 h-10 flex items-center justify-center">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;