"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function ItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch(`https://items-hub-backend.vercel.app/items/${id}`)
      .then(res => res.json())
      .then(data => setItem(data));
  }, [id]);

  if (!item) {
    return <p className="p-10 text-center">Loading...</p>;
  }

  return (
    <div className="p-10 max-w-3xl mx-auto">
      {/* Image */}
      <div className="relative h-72 w-full mb-6">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Basic Info */}
      <h1 className="text-4xl font-bold mb-2">{item.name}</h1>

      <p className="text-sm text-gray-500 mb-3">
        Category: <span className="font-medium">{item.category}</span>
      </p>

      <p className="text-gray-700 mb-4">{item.description}</p>

      <p className="text-2xl font-semibold text-green-600 mb-8">
        {item.price}
      </p>

      {/* Reviews Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>

        {item.reviews && item.reviews.length > 0 ? (
          <div className="space-y-4">
            {item.reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow"
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold">{review.user}</h3>
                  <span className="text-yellow-500 font-medium">
                    ⭐ {review.rating}/5
                  </span>
                </div>

                <p className="text-gray-600 text-sm">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No reviews available.</p>
        )}
      </div>
    </div>
  );
}
