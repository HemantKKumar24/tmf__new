"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      
      {/* Header */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 overflow-hidden">
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">Get In Touch</h1>
            <p className="text-xl text-gray-300">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 to-transparent z-10"></div>
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-white">Name *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-red-600"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-white">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@example.com"
                          className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-red-600"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-white">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 1234567890"
                        className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-red-600"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-white">Subject *</Label>
                      <Input
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="What is this regarding?"
                        className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-red-600"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-white">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us more about your inquiry..."
                        className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-red-600"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-red-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-white">Address</h3>
                      <a 
                        href="https://maps.app.goo.gl/7U11gSJCbmX8zScS9" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-red-600 transition-colors cursor-pointer"
                      >
                        <p>
                          Vegetable Market, Opposite Al Ridaan Hotel,<br />
                          Anjaiah Nagar, Bowenpally,<br />
                          Hyderabad, Secunderabad,<br />
                          Telangana 500009
                        </p>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center">
                        <Phone className="h-6 w-6 text-red-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-white">Phone</h3>
                      <a href="tel:07702553859" className="text-red-600 hover:underline">
                        077025 53859
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-red-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-white">Email</h3>
                      <a href="mailto:Tmfitness71@gmail.com" className="text-red-600 hover:underline">
                        Tmfitness71@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center">
                        <Clock className="h-6 w-6 text-red-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-white">Working Hours</h3>
                      <div className="text-gray-300 space-y-1">
                        <p>Monday - Saturday: 6:00 AM - 11:00 AM, 5:00 PM - 10:00 PM</p>
                        <p>Sunday: 6:00 AM - 10:00 AM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-red-600/10 border-red-600/30">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-red-400">Walk-in Welcome!</h3>
                  <p className="text-gray-300 text-sm">
                    Feel free to visit us during our working hours. Our team will be happy to give you a tour 
                    of our facilities and answer any questions you may have.
                  </p>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-gray-900 border-red-600/30">
                <CardHeader>
                  <CardTitle className="text-white">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <a 
                      href="https://www.facebook.com/108621378746408?ref=pro_upsell_xav_ig_profile_page_web" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-300 hover:text-red-600 transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                      <span>Facebook</span>
                    </a>
                    <a 
                      href="https://www.instagram.com/team_muscle_fitness_gym/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-300 hover:text-red-600 transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                      <span>Instagram</span>
                    </a>
                    <div className="flex items-center space-x-3 text-gray-500 opacity-50">
                      <Twitter className="h-5 w-5" />
                      <span>Twitter (Coming Soon)</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-500 opacity-50">
                      <Youtube className="h-5 w-5" />
                      <span>YouTube (Coming Soon)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-20 bg-black overflow-hidden">
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white font-heading">Find Us on Map</h2>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1902.8982373302417!2d78.49260522218943!3d17.469452748852532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9bc8b6cb8c65%3A0x334b77541b36e0c7!2sTEAM%20MUSCLE%20FITNESS%20GYM%20-%20best%20gym%20in%20Bowenpally!5e0!3m2!1sen!2sin!4v1763881111101!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

