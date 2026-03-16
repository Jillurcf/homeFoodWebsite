"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/login")
    }, 500)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="h-screen bg-primary flex items-center justify-center text-2xl font-bold">
      <Image
        src="/orangeLogo1.png"
        alt="Logo"
        width={100}
        height={100}
        // className="lg:w-20 w-10 sm:w-32"

      />
    </div>
  )
}
