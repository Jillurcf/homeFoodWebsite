"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { cva } from "class-variance-authority"
import { Menu, X, Bell } from "lucide-react"
import { ThemeToggle } from "../theme-toggle"

const navigationMenuTriggerStyle = cva(
  "px-3 py-2 rounded-md font-medium transition-colors",
  {
    variants: {
      selected: {
        true: "bg-primaryFocus text-primary",
        false: "text-primaryFocus hover:bg-primaryFocus hover:text-primary",
      },
    },
  }
)

export default function NavBar() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  const menuItems = [
    { href: "/buyerHome", en: "Home", bn: "হোম" },
    { href: "/aboutus", en: "About Us", bn: "আমাদের সম্পর্কে" },
    { href: "/myshop", en: "My Shop", bn: "সব খাবার" },
    { href: "/Contactus", en: "Contact Us", bn: "যোগাযোগ করুন" },
    { href: "/Settings", en: "Settings", bn: "" },
  ]

  const menuItemsMobile = [
    { href: "/buyerHome", en: "Home" },
    { href: "/Products", en: "My Shop" },
    { href: "/Contactus", en: "Contact" },
    { href: "/Settings", en: "Settings" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-primary">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">

        {/* Logo */}
        <Link href="/buyerHome" className="flex items-center">
          <Image
            src="/orangeLogo1.png"
            alt="Logo"
            width={80}
            height={40}
            className="lg:w-20 w-10 sm:w-32"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">

          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              {menuItems.map((item) => {
                const isActive = pathname === item.href

                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle({
                        selected: isActive,
                      })}
                    >
                      <Link href={item.href} className="text-center">
                        <span className="block text-sm font-medium">
                          {item.en}
                        </span>

                        {item.bn && (
                          <span className="block text-xs font-arabic">
                            {item.bn}
                          </span>
                        )}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Notification Icon */}
          <button className="relative p-2 rounded-md hover:bg-primaryFocus">
            <Bell size={20} />
            {/* Notification badge */}
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1 rounded-full">
              3
            </span>
          </button>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Right Side */}
        <div className="flex items-center gap-3 md:hidden">

          {/* Notification */}
          <button className="relative p-2 rounded-md">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1 rounded-full">
              3
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </div>

      {/* Mobile Bottom Menu */}
      {open && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-primary shadow-inner">

          <nav className="flex justify-around items-center p-2">

            {menuItemsMobile.map((item) => {
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex flex-col items-center text-center transition-colors px-2 py-1 rounded-md ${
                    isActive
                      ? "bg-primaryFocus text-primary"
                      : "text-white"
                  }`}
                >
                  <span className="text-xs font-medium">
                    {item.en}
                  </span>
                </Link>
              )
            })}

            <div className="flex flex-col items-center px-2 py-1">
              <ThemeToggle />
            </div>

          </nav>
        </div>
      )}
    </header>
  )
}