"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://items-hub-backend.vercel.app/items")
      .then((res) => res.json())
      .then((data) => setItems(data)); 
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8 text-center">All Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="relative h-56 w-full mb-4">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded"
              />
            </div>

            <h3 className="text-xl font-bold mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-2">{item.price}</p>
            <p className="text-gray-500 mb-4 text-sm">{item.description}</p>

            <Link
              href={`/items/${item.id}`}
              className="text-indigo-600 font-semibold hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
