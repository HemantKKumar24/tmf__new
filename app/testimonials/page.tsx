"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TestimonialModal } from "@/components/testimonial-modal"
import Link from "next/link"

const allTestimonials = [
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
  {
    id: 7,
    name: "Meera Iyer",
    image: "",
    rating: 5,
    comment: "As a working professional, the flexible hours and variety of classes make it easy to maintain a consistent workout routine. The nutrition guidance has been a game-changer!",
    plan: "Gold Member",
    months: 10,
  },
  {
    id: 8,
    name: "Deepak Kumar",
    image: "",
    rating: 5,
    comment: "I joined with zero fitness experience and the trainers made me feel comfortable from day one. The progress I've made in just 5 months is incredible!",
    plan: "Basic Member",
    months: 5,
  },
  {
    id: 9,
    name: "Kavita Menon",
    image: "",
    rating: 5,
    comment: "The Platinum membership is worth every rupee! The dedicated trainer, meal plans, and recovery sessions have taken my fitness to the next level.",
    plan: "Platinum Member",
    months: 7,
  },
  {
    id: 10,
    name: "Rajesh Kumar",
    image: "",
    rating: 5,
    comment: "Amazing transformation! Lost 20kg in 6 months. The trainers are patient, motivating, and always ready to help. The gym has become my second home.",
    plan: "Gold Member",
    months: 9,
  },
  {
    id: 11,
    name: "Sneha Reddy",
    image: "",
    rating: 5,
    comment: "The women's section is well-maintained and the trainers understand our unique needs. I feel safe and confident working out here. Highly recommend!",
    plan: "Silver Member",
    months: 6,
  },
  {
    id: 12,
    name: "Amit Singh",
    image: "",
    rating: 5,
    comment: "Best investment in my health! The facilities are world-class and the community support is incredible. I've achieved my fitness goals and made great friends too.",
    plan: "Platinum Member",
    months: 11,
  },
  {
    id: 13,
    name: "Divya Sharma",
    image: "",
    rating: 5,
    comment: "The nutrition counseling combined with training has been life-changing. I've not only lost weight but gained so much energy and confidence. Thank you TMF!",
    plan: "Gold Member",
    months: 8,
  },
]

export default function TestimonialsPage() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof allTestimonials[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleReadMore = (testimonial: typeof allTestimonials[0]) => {
    setSelectedTestimonial(testimonial)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedTestimonial(null), 300)
  }

  // Truncate text function
  const truncateText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + "..."
  }

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">What Our Members Say</h1>
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
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/bg_pic/20.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 to-transparent z-10"></div>
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <CardContainer containerClassName="py-0" className="w-full">
                  <CardBody className="h-full max-h-[400px] flex flex-col bg-gray-800/90 border-2 border-gray-700 hover:border-red-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/20 rounded-xl p-6">
                    <CardItem translateZ="50" className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4 border-2 border-red-600/50">
                        <AvatarImage src={testimonial.image} />
                        <AvatarFallback className="bg-red-600/20 text-red-400">
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
                    </CardItem>
                    
                    <CardItem translateZ="40" className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </CardItem>
                    
                    <CardItem translateZ="30" className="mb-2">
                      <Quote className="h-6 w-6 text-red-600 opacity-50" />
                    </CardItem>
                    <CardItem translateZ="60" className="mb-4 italic text-sm leading-relaxed flex-grow">
                      <p className="text-gray-300">
                        {truncateText(testimonial.comment, 120)}
                      </p>
                    </CardItem>
                    
                    <div className="mt-auto space-y-3">
                      <CardItem translateZ="20" as="div">
                        <Button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleReadMore(testimonial)
                          }}
                          variant="outline"
                          className="w-full border-red-600/50 text-red-400 hover:bg-red-600/10 hover:border-red-600 transition-all"
                        >
                          Read More
                        </Button>
                      </CardItem>
                      <div className="flex items-center justify-between pt-2 border-t border-gray-700">
                        <CardItem translateZ="10" className="text-xs text-gray-500">
                          <p>Member for {testimonial.months} {testimonial.months === 1 ? "month" : "months"}</p>
                        </CardItem>
                        <CardItem translateZ="10" className="text-xs text-red-600 font-semibold">
                          <div>Verified Member</div>
                        </CardItem>
                      </div>
                    </div>
                  </CardBody>
                </CardContainer>
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

      {/* Testimonial Modal */}
      <TestimonialModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        testimonial={selectedTestimonial}
      />

      <Footer />
    </div>
  )
}

