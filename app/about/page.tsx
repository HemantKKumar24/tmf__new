"use client"

import { motion } from "framer-motion"
import { Target, Users, Award, Heart, Dumbbell, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">About TEAM MUSCLE FITNESS</h1>
            <p className="text-xl text-gray-300">
              Your journey to a healthier, stronger you starts here
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 to-transparent z-10"></div>
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-elegant">Our Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                At TEAM MUSCLE FITNESS, we believe that fitness is not just about physical strength, 
                but about building confidence, discipline, and a positive mindset. Our mission is to 
                provide a supportive environment where everyone, regardless of their fitness level, 
                can achieve their health and wellness goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <Target className="h-12 w-12 text-red-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-white">Our Vision</h3>
                    <p className="text-gray-300">
                      To be Hyderabad&apos;s leading fitness destination, inspiring and empowering 
                      individuals to lead healthier, more active lives through world-class facilities 
                      and expert guidance.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <Heart className="h-12 w-12 text-red-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-white">Our Values</h3>
                    <p className="text-gray-300">
                      We are committed to excellence, integrity, and creating a welcoming community 
                      where every member feels valued and supported in their fitness journey.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 to-transparent z-10"></div>
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-600 font-elegant">Why Choose Us?</h2>
            <p className="text-lg text-gray-300">
              Experience the difference with our comprehensive approach to fitness
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Dumbbell,
                title: "State-of-the-Art Equipment",
                description: "We invest in the latest fitness equipment from leading brands to ensure you have everything you need for an effective workout.",
              },
              {
                icon: Users,
                title: "Expert Trainers",
                description: "Our certified trainers are passionate about helping you succeed. They provide personalized guidance and motivation every step of the way.",
              },
              {
                icon: Award,
                title: "Proven Results",
                description: "Thousands of members have achieved their fitness goals with us. Join a community of success stories and transform your life.",
              },
              {
                icon: TrendingUp,
                title: "Comprehensive Programs",
                description: "From strength training to yoga, cardio to flexibility, we offer diverse programs to keep your fitness journey exciting and effective.",
              },
              {
                icon: Heart,
                title: "Supportive Community",
                description: "Join a welcoming community of like-minded individuals who support and motivate each other to achieve their best.",
              },
              {
                icon: Target,
                title: "Personalized Approach",
                description: "We understand that everyone&apos;s fitness journey is unique. Our trainers create customized plans tailored to your goals and needs.",
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="cursor-pointer"
                >
                  <Card className="h-full hover:shadow-2xl hover:shadow-red-600/50 transition-all border-2 border-red-600/30 hover:border-red-600 bg-gradient-to-br from-gray-900 to-black">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600/20 mb-4 group-hover:bg-red-600/30 transition-colors"
                      >
                        <IconComponent className="h-8 w-8 text-red-600" />
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="relative py-20 bg-black overflow-hidden">
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-elegant">Visit Us</h2>
            <p className="text-lg text-gray-300 mb-8">
              Located in the heart of Bowenpally, Hyderabad, we&apos;re easily accessible and 
              offer ample parking facilities.
            </p>
            <Card className="bg-gray-900 border-red-600/30">
              <CardContent className="p-8">
                <p className="text-lg font-semibold mb-2 text-white">TEAM MUSCLE FITNESS GYM</p>
                <a 
                  href="https://maps.app.goo.gl/7U11gSJCbmX8zScS9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-red-600 transition-colors cursor-pointer mb-4 block"
                >
                  <p>
                    Vegetable Market, Opposite Al Ridaan Hotel,<br />
                    Anjaiah Nagar, Bowenpally,<br />
                    Hyderabad, Secunderabad,<br />
                    Telangana 500009
                  </p>
                </a>
                <p className="text-gray-300">
                  Phone: <a href="tel:07702553859" className="text-red-600 hover:underline">077025 53859</a>
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

