"use-client"

import Link from "next/link";
import React from "react";

async function products() {
  const data = await fetch("https://fakestoreapi.com/products");
  const products = await data.json();
//   console.log(products);

  return (
    <>
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link href={`/products/${product.id}`}
             key={product.id}>
              <div className="border rounded-lg hover:bg-slate-600 transition-bg cursor-pointer overflow-hidden duration-300 h-full">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold ">{product.title}</h3>
                  <p className=" text-sm mt-2">
                    {product.description.slice(0, 100)}...
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold ">${product.price}</span>
                    <span className="text-sm ">
                      Rating: {product.rating.rate} ({product.rating.count})
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default products;
