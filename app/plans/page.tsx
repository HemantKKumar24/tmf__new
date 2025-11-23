"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { CheckCircle, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const plans = [
  {
    id: "basic",
    name: "Basic",
    price: 1999,
    duration: 30,
    description: "Perfect for beginners starting their fitness journey",
    features: [
      "Access to gym facilities",
      "Basic equipment usage",
      "Locker facility",
      "Monthly fitness assessment",
      "Group workout sessions",
      "Gym access during working hours",
    ],
    popular: false,
  },
  {
    id: "silver",
    name: "Silver",
    price: 2999,
    duration: 30,
    description: "Most popular choice with personal training",
    features: [
      "Everything in Basic",
      "2 Personal trainer sessions per month",
      "Nutrition guidance",
      "Progress tracking & reports",
      "Priority class booking",
      "Access to premium equipment",
      "Monthly body composition analysis",
    ],
    popular: true,
  },
  {
    id: "gold",
    name: "Gold",
    price: 4999,
    duration: 30,
    description: "Ultimate fitness experience with VIP benefits",
    features: [
      "Everything in Silver",
      "Unlimited personal trainer sessions",
      "Custom meal plans",
      "24/7 gym access",
      "Spa & recovery sessions",
      "VIP lounge access",
      "Quarterly fitness retreat",
      "Priority support",
      "Guest passes (2 per month)",
    ],
    popular: false,
  },
  {
    id: "platinum",
    name: "Platinum",
    price: 7999,
    duration: 30,
    description: "Elite membership with exclusive perks",
    features: [
      "Everything in Gold",
      "Dedicated personal trainer",
      "Home workout plans",
      "Nutritionist consultations",
      "Physiotherapy sessions",
      "Exclusive events & workshops",
      "Unlimited guest passes",
      "Complimentary supplements",
      "Annual fitness assessment",
    ],
    popular: false,
  },
]

export default function PlansPage() {
  return (
    <div className="min-h-screen flex flex-col">
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Choose Your Membership Plan
            </h1>
            <p className="text-xl text-gray-300">
              Flexible plans designed to help you achieve your fitness goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full flex flex-col relative ${plan.popular ? "border-2 border-red-600 shadow-2xl scale-105" : ""}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-red-600 text-white px-4 py-1 text-sm font-semibold">
                        <Star className="h-3 w-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="text-center mb-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold">₹{plan.price.toLocaleString()}</span>
                        <span className="text-gray-600 ml-2">/month</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{plan.duration} days validity</p>
                    </div>
                    
                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      asChild 
                      className={`w-full ${plan.popular ? "bg-red-600 hover:bg-red-700" : ""}`}
                      size="lg"
                    >
                      <Link href={`/payment?plan=${plan.id}`}>
                        Select Plan <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Membership Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">No Long-term Contracts</h3>
                  <p className="text-gray-600 text-sm">Cancel anytime with 30 days notice</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Free Trial Available</h3>
                  <p className="text-gray-600 text-sm">Try our facilities for 3 days free</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Flexible Payment Options</h3>
                  <p className="text-gray-600 text-sm">Monthly, quarterly, or annual payments</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Upgrade Anytime</h3>
                  <p className="text-gray-600 text-sm">Upgrade your plan as your needs grow</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

