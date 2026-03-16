"use client"

import React, { useState } from "react"

const Page = () => {

  const [showForm, setShowForm] = useState(false)
  const [shop, setShop] = useState(false)

  const [shopInfo, setShopInfo] = useState({
    shopName: "",
    ownerName: "",
    phone: ""
  })

  const [foods, setFoods] = useState<any[]>([])
  const [foodName, setFoodName] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setShop(true)
    setShowForm(false)

    alert("Shop Created Successfully!")
  }

  const handleCreateFood = () => {
    const newFood = {
      id: Date.now(),
      name: foodName,
      price
    }

    setFoods([...foods, newFood])
    setFoodName("")
    setPrice("")
  }

  const handleDelete = (id: number) => {
    setFoods(foods.filter((f) => f.id !== id))
  }

  const handleUpdate = (id: number) => {
    const newName = prompt("Update food name")
    if (!newName) return

    setFoods(
      foods.map((f) =>
        f.id === id ? { ...f, name: newName } : f
      )
    )
  }

  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-3xl font-bold text-center mb-8">
        My Shop
      </h1>

      {/* NEW USER */}
      {!showForm && !shop && (
        <div className="flex justify-center">

          <button
            onClick={() => setShowForm(true)}
            className="bg-primary text-white px-6 py-3 rounded-lg"
          >
            Create Shop
          </button>

        </div>
      )}

      {/* SHOP CREATE FORM */}
      {showForm && (

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-8 space-y-6"
        >

          <input
            type="text"
            placeholder="Shop Name"
            className="w-full border p-2 rounded"
            required
            onChange={(e) =>
              setShopInfo({ ...shopInfo, shopName: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Owner Name"
            className="w-full border p-2 rounded"
            required
            onChange={(e) =>
              setShopInfo({ ...shopInfo, ownerName: e.target.value })
            }
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-2 rounded"
            required
            onChange={(e) =>
              setShopInfo({ ...shopInfo, phone: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            required
          />

          <textarea
            placeholder="Address"
            className="w-full border p-2 rounded"
            required
          />

          <input type="file" />

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Submit Shop Request
          </button>

        </form>

      )}

      {/* SHOP DASHBOARD */}
      {shop && (

        <div>

          {/* SHOP BANNER */}
          <div className="bg-primary text-white p-6 rounded-xl mb-6">

            <h2 className="text-2xl font-bold">
              {shopInfo.shopName}
            </h2>

            <p>Owner: {shopInfo.ownerName}</p>

            <p>Phone: {shopInfo.phone}</p>

          </div>

          {/* CREATE FOOD */}
          <div className="bg-white p-4 rounded-lg shadow mb-6">

            <h3 className="text-xl font-semibold mb-3">
              Add Food
            </h3>

            <div className="flex gap-3">

              <input
                type="text"
                placeholder="Food name"
                value={foodName}
                onChange={(e) => setFoodName(e.target.value)}
                className="border p-2 rounded w-full"
              />

              <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="border p-2 rounded w-40"
              />

              <button
                onClick={handleCreateFood}
                className="bg-primary text-white px-4 rounded"
              >
                Add
              </button>

            </div>

          </div>

          {/* FOOD LIST */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              My Foods
            </h3>

            {foods.length === 0 && (
              <p>No foods added yet</p>
            )}

            <div className="grid md:grid-cols-3 gap-4">

              {foods.map((food) => (

                <div
                  key={food.id}
                  className="border p-4 rounded-lg shadow"
                >

                  <h4 className="font-semibold">
                    {food.name}
                  </h4>

                  <p>৳ {food.price}</p>

                  <div className="flex gap-2 mt-3">

                    <button
                      onClick={() => handleUpdate(food.id)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Update
                    </button>

                    <button
                      onClick={() => handleDelete(food.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      )}

    </div>
  )
}

export default Page