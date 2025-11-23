"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Dumbbell, Users, Award, Clock, CheckCircle, Activity, Zap, Target, HeartPulse, Flame, Shield, Star, Quote, Apple } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { VideoBackground } from "@/components/video-background"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden pb-20">
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
        {/* Video Background */}
        <VideoBackground />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] z-0"></div>
        <div className="container mx-auto px-4 relative z-10 flex items-center justify-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto pb-16"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-8"
            >
              <img 
                src="/bg_pic/tmf_no_bg.png" 
                alt="TEAM MUSCLE FITNESS" 
                className="h-40 md:h-56 w-auto object-contain mx-auto drop-shadow-2xl"
                style={{ filter: 'brightness(1.15) contrast(1.15)' }}
              />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 bg-gradient-to-r from-white via-red-50 to-red-400 bg-clip-text text-transparent drop-shadow-2xl tracking-tight leading-tight font-heading"
            >
              TEAM MUSCLE FITNESS
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl lg:text-3xl text-white mb-8 font-semibold drop-shadow-2xl tracking-wide font-elegant"
            >
              Transform Your Body, Transform Your Life
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-base md:text-lg lg:text-xl text-white/95 mb-12 max-w-3xl mx-auto drop-shadow-lg leading-relaxed font-light"
            >
              Join Hyderabad&apos;s premier fitness destination. State-of-the-art equipment, expert trainers, and a community that supports your fitness journey.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-5 justify-center"
            >
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-lg md:text-xl px-10 py-7 shadow-2xl shadow-red-600/50 hover:shadow-red-700/50 transition-all font-semibold tracking-wide rounded-lg">
                <Link href="/plans">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white/90 text-white hover:bg-white/10 hover:border-white backdrop-blur-md text-lg md:text-xl px-10 py-7 shadow-2xl transition-all font-semibold tracking-wide rounded-lg">
                <Link href="/schedule">
                  View Schedule
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Subtle Animated Background Elements */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </section>

      {/* Features Section */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 to-transparent z-10"></div>
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "url('/bg_pic/1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/70"></div>
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-red-600 to-transparent z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-heading">Why Choose Us?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the difference with our world-class facilities and expert guidance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Dumbbell,
                title: "State-of-the-Art Equipment",
                description: "Latest fitness equipment from leading brands to help you achieve your goals",
              },
              {
                icon: Users,
                title: "Expert Trainers",
                description: "Certified trainers dedicated to your success and fitness journey",
              },
              {
                icon: Award,
                title: "Proven Results",
                description: "Join thousands of members who have transformed their lives with us",
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="cursor-pointer"
                >
                  <Card className="h-full hover:shadow-2xl hover:shadow-red-600/50 transition-all border-2 border-red-600/30 hover:border-red-600 bg-gradient-to-br from-gray-900 to-black">
                    <CardContent className="p-8 text-center">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-600/20 mb-4 group-hover:bg-red-600/30 transition-colors"
                      >
                        <IconComponent className="h-10 w-10 text-red-600" />
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

      {/* Stats Section */}
      <section className="relative py-20 bg-gradient-to-r from-red-600 to-red-700 text-white overflow-hidden">
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-red-600 to-transparent z-10"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5000+", label: "Active Members" },
              { number: "50+", label: "Expert Trainers" },
              { number: "15+", label: "Years Experience" },
              { number: "100+", label: "Classes Weekly" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg text-red-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 bg-black overflow-hidden">
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "url('/bg_pic/3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-heading">What Our Members Say</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real stories from real people who transformed their lives with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: "Hemant Dobriyal",
                image: "",
                rating: 5,
                comment: "My fitness journey with TEAM MUSCLE FITNESS has been absolutely incredible! Starting with the Platinum pack and personal training sessions with Coach Rahemath Khan, I've achieved amazing results. From my initial fitness assessment to now, I've lost significant weight, gained incredible strength, and completely transformed my body. Coach Rahemath's expertise, personalized meal plans, and constant motivation made all the difference. This isn't just a gym - it's a life-changing experience!",
                plan: "Platinum Member",
                months: 8,
                trainer: "Rahemath Khan",
              },
              {
                id: 2,
                name: "Rahul Sharma",
                image: "",
                rating: 5,
                comment: "TEAM MUSCLE FITNESS has completely transformed my life! The trainers are incredibly knowledgeable and supportive. I've lost 15kg in just 3 months and feel stronger than ever.",
                plan: "Gold Member",
                months: 6,
              },
              {
                id: 3,
                name: "Priya Patel",
                image: "",
                rating: 5,
                comment: "Best gym in Hyderabad! The facilities are top-notch and the community is amazing. The personal training sessions have helped me achieve goals I never thought possible.",
                plan: "Silver Member",
                months: 4,
              },
              {
                id: 4,
                name: "Vikram Reddy",
                image: "",
                rating: 5,
                comment: "I've been a member for over a year now and I can't imagine going anywhere else. The equipment is always well-maintained and the staff is friendly and professional.",
                plan: "Gold Member",
                months: 12,
              },
              {
                id: 5,
                name: "Anita Desai",
                image: "",
                rating: 5,
                comment: "The yoga and flexibility classes are fantastic! I've improved my posture and reduced back pain significantly. Highly recommend to anyone looking for a holistic fitness approach.",
                plan: "Basic Member",
                months: 3,
              },
              {
                id: 6,
                name: "Arjun Nair",
                image: "",
                rating: 5,
                comment: "The HIIT classes are intense but so rewarding! I've gained incredible strength and endurance. The trainers push you to be your best while ensuring safety.",
                plan: "Silver Member",
                months: 8,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="cursor-pointer"
              >
                <Card className="h-full bg-gradient-to-br from-gray-900 to-black border-2 border-red-600/30 hover:border-red-600 transition-all hover:shadow-2xl hover:shadow-red-600/20">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4 border-2 border-red-600/50">
                        <AvatarImage src={testimonial.image} />
                        <AvatarFallback className="bg-red-600/20 text-red-600 font-bold">
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-white">{testimonial.name}</h3>
                        <p className="text-sm text-gray-400">{testimonial.plan}</p>
                        {testimonial.trainer && (
                          <p className="text-xs text-red-600">Trainer: {testimonial.trainer}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <Quote className="h-5 w-5 text-red-600 mb-2 opacity-50" />
                    <p className="text-gray-300 mb-4 italic text-sm leading-relaxed">{testimonial.comment}</p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-red-600/20">
                      <p className="text-xs text-gray-500">
                        Member for {testimonial.months} {testimonial.months === 1 ? "month" : "months"}
                      </p>
                      <Badge variant="outline" className="border-red-600/50 text-red-600 text-xs">
                        Verified
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
      </section>

      {/* Services/Gallery Section */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 to-transparent z-10"></div>
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/bg_pic/2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-heading">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive fitness solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Dumbbell, title: "Personal Training", desc: "One-on-one sessions with expert trainers" },
              { icon: Users, title: "Group Classes", desc: "Fun and motivating group workout sessions" },
              { icon: Apple, title: "Nutrition Plans", desc: "Customized meal plans for your goals" },
              { icon: HeartPulse, title: "Health Assessment", desc: "Regular body composition analysis" },
            ].map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-gradient-to-br from-gray-900 to-black border-red-600/30 hover:border-red-600 transition-all text-center h-full">
                    <CardContent className="p-6">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600/20 mb-4"
                      >
                        <IconComponent className="h-8 w-8 text-red-600" />
                      </motion.div>
                      <h3 className="text-lg font-semibold mb-2 text-white">{service.title}</h3>
                      <p className="text-sm text-gray-400">{service.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-black text-white overflow-hidden">
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Ready to Start Your Fitness Journey?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join TEAM MUSCLE FITNESS today and take the first step towards a healthier, stronger you.
            </p>
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-6">
              <Link href="/plans">
                View Plans <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
