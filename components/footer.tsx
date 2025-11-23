import Link from "next/link"
import { Dumbbell, MapPin, Phone, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Dumbbell className="h-6 w-6 text-red-600" />
              <span className="text-xl font-bold text-red-600">TEAM MUSCLE FITNESS</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transform your body, transform your life. Join Hyderabad&apos;s premier fitness destination.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-red-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/plans" className="text-gray-400 hover:text-red-600 transition-colors">
                  Membership Plans
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-gray-400 hover:text-red-600 transition-colors">
                  Class Schedule
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-red-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-red-600 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/coaches" className="text-gray-400 hover:text-red-600 transition-colors">
                  Coaches
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span>
                  Vegetable Market, Opposite Al Ridaan Hotel,<br />
                  Anjaiah Nagar, Bowenpally,<br />
                  Hyderabad, Secunderabad,<br />
                  Telangana 500009
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-red-600 flex-shrink-0" />
                <a href="tel:07702553859" className="hover:text-red-600 transition-colors">
                  077025 53859
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-start space-x-2">
                <Clock className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Monday - Thursday</p>
                  <p>6:00 AM - 11:00 AM</p>
                  <p>5:00 PM - 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-2 mt-3">
                <Clock className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Friday - Sunday</p>
                  <p>6:00 AM - 11:00 AM</p>
                  <p>5:00 PM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} TEAM MUSCLE FITNESS GYM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

