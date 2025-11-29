"use client"

import { motion } from "framer-motion"
import { Star, Quote, ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

const allReviews = [
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
  {
    id: 9,
    name: "Rajesh Kumar",
    image: "",
    rating: 5,
    comment: "Amazing transformation! Lost 20kg in 6 months. The trainers are patient, motivating, and always ready to help. The gym has become my second home.",
    plan: "Gold Member",
    months: 9,
  },
  {
    id: 10,
    name: "Sneha Reddy",
    image: "",
    rating: 5,
    comment: "The women's section is well-maintained and the trainers understand our unique needs. I feel safe and confident working out here. Highly recommend!",
    plan: "Silver Member",
    months: 6,
  },
  {
    id: 11,
    name: "Amit Singh",
    image: "",
    rating: 5,
    comment: "Best investment in my health! The facilities are world-class and the community support is incredible. I've achieved my fitness goals and made great friends too.",
    plan: "Platinum Member",
    months: 11,
  },
  {
    id: 12,
    name: "Divya Sharma",
    image: "",
    rating: 5,
    comment: "The nutrition counseling combined with training has been life-changing. I've not only lost weight but gained so much energy and confidence. Thank you TMF!",
    plan: "Gold Member",
    months: 8,
  },
]

export default function ReviewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      
      {/* Header */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Link href="/testimonials">
              <Button
                variant="ghost"
                className="mb-6 text-gray-400 hover:text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Testimonials
              </Button>
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">All Reviews</h1>
            <p className="text-xl text-gray-300">
              Read what our gym family has to say about their fitness journey with us
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/bg_pic/3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="h-full bg-gray-800/90 border-gray-700 hover:border-red-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/20">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4 border-2 border-red-600/50">
                        <AvatarImage src={review.image} />
                        <AvatarFallback className="bg-red-600/20 text-red-400">
                          {review.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-white">{review.name}</h3>
                        <p className="text-sm text-gray-400">{review.plan}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 + i * 0.1 }}
                        >
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>
                    
                    <Quote className="h-6 w-6 text-red-600 mb-2 opacity-50" />
                    <p className="text-gray-300 mb-4 italic leading-relaxed">{review.comment}</p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                      <p className="text-xs text-gray-500">
                        Member for {review.months} {review.months === 1 ? "month" : "months"}
                      </p>
                      <div className="text-xs text-red-600 font-semibold">
                        Verified Member
                      </div>
                    </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-heading">Join Our Gym Family</h2>
            <p className="text-lg text-gray-300 mb-8">
              Become part of thousands of members who are transforming their lives every day
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="inline-block">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/plans" className="inline-block">
                <Button variant="outline" className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Plans
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

