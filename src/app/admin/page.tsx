"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"

const AdminLogin = () => {

  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    const adminEmail = "admin@gmail.com"
    const adminPassword = "123456"

    if (email === adminEmail && password === adminPassword) {
      router.push("/admin/dashboard")
    } else {
      setError("Invalid admin credentials")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">

      <form
        onSubmit={handleLogin}
        className="bg-white shadow-lg rounded-xl p-8 w-96 space-y-4"
      >

        <h1 className="text-2xl font-bold text-center">
          Admin Login
        </h1>

        {error && (
          <p className="text-red-500 text-sm text-center">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Admin Email"
          className="w-full border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded"
        >
          Login
        </button>

      </form>

    </div>
  )
}

export default AdminLogin