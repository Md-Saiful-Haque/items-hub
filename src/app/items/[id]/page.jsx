"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function ItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch(`https://items-hub-backend.vercel.app/api/${id}`)
      .then(res => res.json())
      .then(data => setItem(data));
  }, [id]);

  if (!item) return <p className="p-10">Loading...</p>;

  return (
    <div className="p-10 max-w-xl mx-auto">
      <div className="relative h-64 w-full mb-4">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover rounded"
        />
      </div>

      <h1 className="text-4xl font-bold mb-2">{item.name}</h1>
      <p className="mb-2">{item.description}</p>
      <p className="text-xl font-semibold">{item.price}</p>
    </div>
  );
}
