"use client"

import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import Image from "next/image"
import { useState } from "react"

export default function RegisterPage() {
  const { theme } = useTheme()
  const router = useRouter()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    nidNumber: "",
    nidImage: null,
    address: "",
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === "nidImage") {
      setFormData({ ...formData, nidImage: files[0] })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleRegister = () => {
    console.log("Form Data:", formData)
    // Add API call or form submission logic here
    router.replace("/buyerHome")
  }

  return (
    <div
      className={`mx-auto p-4 ${
        theme === "dark"
          ? "bg-black text-white h-screen"
          : "bg-primary text-black h-screen"
      }`}
    >
      <div className="max-w-md mx-auto flex flex-col items-center justify-center h-full">
        
        <div className="p-6">
          <Image
            src="/orangeLogo1.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </div>

        <h1 className="text-3xl text-background font-bold mb-6">Register</h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="border text-background border-background p-2 w-full mb-4 rounded-xl"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border text-background border-background p-2 w-full mb-4 rounded-xl"
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          className="border text-background border-background p-2 w-full mb-4 rounded-xl"
        />

        <input
          type="text"
          name="nidNumber"
          placeholder="NID Number"
          value={formData.nidNumber}
          onChange={handleChange}
          className="border text-background border-background p-2 w-full mb-4 rounded-xl"
        />

        <input
          type="file"
          name="nidImage"
          accept="image/*"
          onChange={handleChange}
          className="border text-background border-background p-2 w-full mb-4 rounded-xl"
        />

        <textarea
          name="address"
          placeholder="Present Address"
          value={formData.address}
          onChange={handleChange}
          className="border text-background border-background p-2 w-full mb-4 rounded-xl"
        />

        <button
          onClick={handleRegister}
          className="bg-background text-primary px-4 py-2 rounded-xl w-full"
        >
          Register
        </button>

        <div className="flex items-center gap-2 mt-4">
          <h6>Already have an account?</h6>
          <button
            onClick={() => router.push("/login")}
            className="text-background font-semibold underline"
          >
            Login
          </button>
        </div>

      </div>
    </div>
  )
}