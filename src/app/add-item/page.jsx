"use client";

export default function AddItem() {
  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:5000/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: e.target.name.value,
        description: e.target.description.value,
        price: e.target.price.value,
        image: e.target.image.value,
      }),
    });

    alert("Item Added Successfully");
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow w-96">
        <h2 className="text-2xl font-bold mb-4">Add Item</h2>
        <input name="name" placeholder="Name" className="w-full p-2 mb-3 border"/>
        <input name="description" placeholder="Description" className="w-full p-2 mb-3 border"/>
        <input name="price" placeholder="Price" className="w-full p-2 mb-3 border"/>
        <input name="image" placeholder="Image URL" className="w-full p-2 mb-3 border"/>
        <button className="w-full bg-green-500 text-white py-2 rounded">
          Add Item
        </button>
      </form>
    </div>
  );
}
