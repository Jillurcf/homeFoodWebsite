"use client"

import React, { useState } from "react"

const AdminDashboard = () => {

  const [active, setActive] = useState("dashboard")

  const renderContent = () => {
    switch (active) {

      case "dashboard":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-white shadow p-6 rounded-lg">
                <h3 className="text-lg font-semibold">Total Shops</h3>
                <p className="text-3xl font-bold mt-2">12</p>
              </div>

              <div className="bg-white shadow p-6 rounded-lg">
                <h3 className="text-lg font-semibold">Total Foods</h3>
                <p className="text-3xl font-bold mt-2">85</p>
              </div>

              <div className="bg-white shadow p-6 rounded-lg">
                <h3 className="text-lg font-semibold">Orders Today</h3>
                <p className="text-3xl font-bold mt-2">21</p>
              </div>

            </div>
          </div>
        )

      case "shops":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Approve Seller Shops</h2>
            <p>List of pending shop requests will appear here.</p>
          </div>
        )

      case "foods":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Manage Foods</h2>
            <p>Admin can edit or delete foods.</p>
          </div>
        )

      case "orders":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Manage Orders</h2>
            <p>All customer orders will appear here.</p>
          </div>
        )

      case "users":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
            <p>Admin can manage all users.</p>
          </div>
        )

      case "reports":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Reports</h2>
            <p>Analytics and reports will appear here.</p>
          </div>
        )

      default:
        return null
    }
  }

  return (

    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white p-6">

        <h1 className="text-2xl font-bold mb-8">
          Admin Panel
        </h1>

        <nav className="space-y-3">

          <button
            onClick={() => setActive("dashboard")}
            className="block w-full text-left hover:bg-primaryFocus px-3 py-2 rounded"
          >
            Dashboard
          </button>

          <button
            onClick={() => setActive("shops")}
            className="block w-full text-left hover:bg-primaryFocus px-3 py-2 rounded"
          >
            Approve Seller Shops
          </button>

          <button
            onClick={() => setActive("foods")}
            className="block w-full text-left hover:bg-primaryFocus px-3 py-2 rounded"
          >
            Manage Foods
          </button>

          <button
            onClick={() => setActive("orders")}
            className="block w-full text-left hover:bg-primaryFocus px-3 py-2 rounded"
          >
            Manage Orders
          </button>

          <button
            onClick={() => setActive("users")}
            className="block w-full text-left hover:bg-primaryFocus px-3 py-2 rounded"
          >
            Manage Users
          </button>

          <button
            onClick={() => setActive("reports")}
            className="block w-full text-left hover:bg-primaryFocus px-3 py-2 rounded"
          >
            Reports
          </button>

        </nav>

      </aside>


      {/* Main Content */}
      <main className="flex-1 p-10">

        {renderContent()}

      </main>

    </div>

  )
}

export default AdminDashboard