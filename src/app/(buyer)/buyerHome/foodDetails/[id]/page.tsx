"use client"

import { useSearchParams } from "next/navigation"
import Image from "next/image"

export default function FoodDetails() {

  const searchParams = useSearchParams()

  const name = searchParams.get("name")
  const price = searchParams.get("price")
  const phone = searchParams.get("phone")
  const address = searchParams.get("address")
  const description = searchParams.get("description")
  const image = searchParams.get("image")

  return (
    <div className=" mx-auto p-6">

      <div className="w-full h-64 lg:h-96 relative mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain rounded-xl"
        />
      </div>

      <h1 className="text-3xl font-bold mb-2">{name}</h1>

      <p className="text-gray-600 mb-4">{description}</p>

      <p className="text-xl font-bold text-green-600 mb-2">
        Price: ৳ {price}
      </p>

      <p className="mb-2">
        📞 
        <a
          href={`tel:${phone}`}
          className="text-blue-600 underline ml-1"
        >
          {phone}
        </a>
      </p>

      <p className="mb-6">📍 {address}</p>

      <button className="w-full bg-primary text-background py-3 rounded-xl font-semibold">
        Order Now
      </button>

    </div>
  )
}