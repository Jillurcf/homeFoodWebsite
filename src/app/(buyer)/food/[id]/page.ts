"use client"

import { useParams } from "next/navigation"

export default function FoodDetails() {

  const params = useParams()

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-4">
        Food Details Page
      </h1>

      <p className="text-lg">
        Selected Food ID: {params.id}
      </p>

    </div>
  )
}