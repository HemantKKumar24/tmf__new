"use client"

import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, User, LogOut, Calendar, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  const { data: session } = useSession()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav 
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled 
          ? "bg-black/60 backdrop-blur-md border-b border-gray-800/30" 
          : "bg-transparent backdrop-blur-none border-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <img 
                src="/bg_pic/tmf_no_bg.png" 
                alt="TEAM MUSCLE FITNESS" 
                className="h-14 w-auto object-contain"
                style={{ filter: 'brightness(1.15) contrast(1.15)' }}
              />
              <span className={`text-xl font-bold hidden sm:inline tracking-tight font-heading transition-colors duration-300 ${
                scrolled ? "text-red-600" : "text-white drop-shadow-lg"
              }`}>TEAM MUSCLE FITNESS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className={`px-4 py-2 text-sm font-medium transition-colors ${
                    scrolled ? "text-foreground hover:text-red-600" : "text-white hover:text-red-400 drop-shadow-md"
                  }`}>
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/plans" className={`px-4 py-2 text-sm font-medium transition-colors ${
                    scrolled ? "text-foreground hover:text-red-600" : "text-white hover:text-red-400 drop-shadow-md"
                  }`}>
                    Plans
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/schedule" className={`px-4 py-2 text-sm font-medium transition-colors ${
                    scrolled ? "text-foreground hover:text-red-600" : "text-white hover:text-red-400 drop-shadow-md"
                  }`}>
                    Schedule
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/coaches" className={`px-4 py-2 text-sm font-medium transition-colors ${
                    scrolled ? "text-foreground hover:text-red-600" : "text-white hover:text-red-400 drop-shadow-md"
                  }`}>
                    Coaches
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about" className={`px-4 py-2 text-sm font-medium transition-colors ${
                    scrolled ? "text-foreground hover:text-red-600" : "text-white hover:text-red-400 drop-shadow-md"
                  }`}>
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact" className={`px-4 py-2 text-sm font-medium transition-colors ${
                    scrolled ? "text-foreground hover:text-red-600" : "text-white hover:text-red-400 drop-shadow-md"
                  }`}>
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/faq" className={`px-4 py-2 text-sm font-medium transition-colors ${
                    scrolled ? "text-foreground hover:text-red-600" : "text-white hover:text-red-400 drop-shadow-md"
                  }`}>
                    FAQ
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {session ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={session.user?.image || ""} alt={session.user?.name || ""} />
                      <AvatarFallback>{session.user?.name?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      {session.user?.name && <p className="font-medium">{session.user.name}</p>}
                      {session.user?.email && (
                        <p className="w-[200px] truncate text-sm text-muted-foreground">
                          {session.user.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/schedule" className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      My Bookings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/payment" className="flex items-center">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Payments
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onSelect={(event) => {
                      event.preventDefault()
                      signOut({ callbackUrl: "/" })
                    }}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button asChild variant="ghost" className={scrolled ? "" : "text-white hover:text-white/80 hover:bg-white/10"}>
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild className={`transition-all ${scrolled ? "bg-red-600 hover:bg-red-700" : "bg-red-600/90 hover:bg-red-700/90 backdrop-blur-sm border border-white/20"}`}>
                  <Link href="/register">Register</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className={`md:hidden transition-colors ${scrolled ? "" : "text-white hover:text-white/80 hover:bg-white/10"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              <Link href="/" className="block py-2 text-sm font-medium hover:text-red-600">
                Home
              </Link>
              <Link href="/plans" className="block py-2 text-sm font-medium hover:text-red-600">
                Plans
              </Link>
              <Link href="/schedule" className="block py-2 text-sm font-medium hover:text-red-600">
                Schedule
              </Link>
              <Link href="/coaches" className="block py-2 text-sm font-medium hover:text-red-600">
                Coaches
              </Link>
              <Link href="/about" className="block py-2 text-sm font-medium hover:text-red-600">
                About
              </Link>
              <Link href="/contact" className="block py-2 text-sm font-medium hover:text-red-600">
                Contact
              </Link>
              <Link href="/faq" className="block py-2 text-sm font-medium hover:text-red-600">
                FAQ
              </Link>
              <div className="pt-4 border-t space-y-2">
                {session ? (
                  <>
                    <Link href="/dashboard" className="block py-2 text-sm font-medium">
                      Dashboard
                    </Link>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => signOut({ callbackUrl: "/" })}
                    >
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                      <Link href="/register">Register</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

