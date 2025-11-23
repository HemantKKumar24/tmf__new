"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    image: "",
    rating: 5,
    comment: "TEAM MUSCLE FITNESS has completely transformed my life! The trainers are incredibly knowledgeable and supportive. I've lost 15kg in just 3 months and feel stronger than ever.",
    plan: "Gold Member",
    months: 6,
  },
  {
    id: 2,
    name: "Priya Patel",
    image: "",
    rating: 5,
    comment: "Best gym in Hyderabad! The facilities are top-notch and the community is amazing. The personal training sessions have helped me achieve goals I never thought possible.",
    plan: "Silver Member",
    months: 4,
  },
  {
    id: 3,
    name: "Vikram Reddy",
    image: "",
    rating: 5,
    comment: "I've been a member for over a year now and I can't imagine going anywhere else. The equipment is always well-maintained and the staff is friendly and professional.",
    plan: "Gold Member",
    months: 12,
  },
  {
    id: 4,
    name: "Anita Desai",
    image: "",
    rating: 5,
    comment: "The yoga and flexibility classes are fantastic! I've improved my posture and reduced back pain significantly. Highly recommend to anyone looking for a holistic fitness approach.",
    plan: "Basic Member",
    months: 3,
  },
  {
    id: 5,
    name: "Arjun Nair",
    image: "",
    rating: 5,
    comment: "The HIIT classes are intense but so rewarding! I've gained incredible strength and endurance. The trainers push you to be your best while ensuring safety.",
    plan: "Silver Member",
    months: 8,
  },
  {
    id: 6,
    name: "Meera Iyer",
    image: "",
    rating: 5,
    comment: "As a working professional, the flexible hours and variety of classes make it easy to maintain a consistent workout routine. The nutrition guidance has been a game-changer!",
    plan: "Gold Member",
    months: 10,
  },
  {
    id: 7,
    name: "Deepak Kumar",
    image: "",
    rating: 5,
    comment: "I joined with zero fitness experience and the trainers made me feel comfortable from day one. The progress I've made in just 5 months is incredible!",
    plan: "Basic Member",
    months: 5,
  },
  {
    id: 8,
    name: "Kavita Menon",
    image: "",
    rating: 5,
    comment: "The Platinum membership is worth every rupee! The dedicated trainer, meal plans, and recovery sessions have taken my fitness to the next level.",
    plan: "Platinum Member",
    months: 7,
  },
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">What Our Members Say</h1>
            <p className="text-xl text-gray-300">
              Real stories from real people who transformed their lives with us
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
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
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={testimonial.image} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.plan}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <Quote className="h-6 w-6 text-red-600 mb-2 opacity-50" />
                    <p className="text-gray-300 mb-4 italic">{testimonial.comment}</p>
                    
                    <p className="text-xs text-gray-500">
                      Member for {testimonial.months} {testimonial.months === 1 ? "month" : "months"}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Join Our Community?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Become part of thousands of members who are transforming their lives every day
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/register" className="inline-block">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Start Your Journey
                </button>
              </a>
              <a href="/plans" className="inline-block">
                <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Plans
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

