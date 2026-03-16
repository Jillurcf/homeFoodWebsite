"use client"

import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import Image from "next/image"

export default function LoginPage() {
  const { theme } = useTheme()
  const router = useRouter()

  const handleLogin = () => {
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

        <h1 className="text-3xl text-background font-bold mb-6">Login</h1>

        <input
          type="text"
          placeholder="Email"
          className="border text-background border-background p-2 w-full mb-4 rounded-xl"
        />

        <input
          type="password"
          placeholder="Password"
          className="border text-background border-background p-2 w-full mb-4 rounded-xl"
        />

        <button
          onClick={handleLogin}
          className="bg-background text-primary px-4 py-2 rounded-xl w-full"
        >
          Login
        </button>

        <div className="flex items-center gap-2 mt-4">
          <h6>Do not have an account?</h6>

          <button
            onClick={() => router.push("/register")}
            className="text-background font-semibold underline"
          >
            Register
          </button>
        </div>

      </div>
    </div>
  )
}