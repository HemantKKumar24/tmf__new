"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { CheckCircle, ArrowRight, Star, DollarSign, TrendingUp, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Base prices in INR (monthly)
const basePlans = {
  basic: { name: "Basic", monthlyINR: 1999, monthlyUSD: 24 },
  silver: { name: "Silver", monthlyINR: 2999, monthlyUSD: 36 },
  gold: { name: "Gold", monthlyINR: 4999, monthlyUSD: 60 },
  platinum: { name: "Platinum", monthlyINR: 7999, monthlyUSD: 96 },
}

// Discounts for quarterly and yearly
const discounts = {
  monthly: 0,
  quarterly: 0.1, // 10% off
  yearly: 0.2, // 20% off
}

const planFeatures = {
  basic: [
    "Access to gym facilities",
    "Basic equipment usage",
    "Locker facility",
    "Monthly fitness assessment",
    "Group workout sessions",
    "Gym access during working hours",
  ],
  silver: [
    "Everything in Basic",
    "2 Personal trainer sessions per month",
    "Nutrition guidance",
    "Progress tracking & reports",
    "Priority class booking",
    "Access to premium equipment",
    "Monthly body composition analysis",
  ],
  gold: [
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
  platinum: [
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
}

export default function PlansPage() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR")
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "quarterly" | "yearly">("monthly")

  const calculatePrice = (planKey: keyof typeof basePlans) => {
    const base = basePlans[planKey]
    const monthlyPrice = currency === "INR" ? base.monthlyINR : base.monthlyUSD
    const discount = discounts[billingPeriod]
    
    let totalPrice = monthlyPrice
    if (billingPeriod === "quarterly") {
      totalPrice = monthlyPrice * 3 * (1 - discount)
    } else if (billingPeriod === "yearly") {
      totalPrice = monthlyPrice * 12 * (1 - discount)
    }
    
    return Math.round(totalPrice)
  }

  const getPeriodLabel = () => {
    if (billingPeriod === "monthly") return "per month"
    if (billingPeriod === "quarterly") return "for 3 months"
    return "for 12 months"
  }

  const plans = Object.entries(basePlans).map(([key, plan]) => ({
    id: key,
    ...plan,
    features: planFeatures[key as keyof typeof planFeatures],
    popular: key === "silver",
  }))

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      
      {/* Header */}
      <section className="relative bg-gradient-to-br from-black via-red-950 to-black py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-6"
            >
              <Zap className="h-16 w-16 text-red-600 mx-auto" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              Choose Your Membership Plan
            </h1>
            <p className="text-xl text-gray-300">
              Flexible plans designed to help you achieve your fitness goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Currency and Billing Period Selector */}
      <section className="py-8 bg-gray-900 border-b border-red-600/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              {/* Currency Toggle */}
              <div className="flex items-center gap-4">
                <span className="text-gray-400">Currency:</span>
                <Tabs value={currency} onValueChange={(val) => setCurrency(val as "INR" | "USD")}>
                  <TabsList className="bg-black border border-red-600/50">
                    <TabsTrigger value="INR" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                      ₹ INR
                    </TabsTrigger>
                    <TabsTrigger value="USD" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                      $ USD
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {/* Billing Period Toggle */}
              <div className="flex items-center gap-4">
                <span className="text-gray-400">Billing:</span>
                <Tabs value={billingPeriod} onValueChange={(val) => setBillingPeriod(val as typeof billingPeriod)}>
                  <TabsList className="bg-black border border-red-600/50">
                    <TabsTrigger value="monthly" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                      Monthly
                    </TabsTrigger>
                    <TabsTrigger value="quarterly" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                      Quarterly
                      <Badge className="ml-2 bg-green-600 text-white text-xs">10% OFF</Badge>
                    </TabsTrigger>
                    <TabsTrigger value="yearly" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                      Yearly
                      <Badge className="ml-2 bg-green-600 text-white text-xs">20% OFF</Badge>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => {
              const price = calculatePrice(plan.id as keyof typeof basePlans)
              const symbol = currency === "INR" ? "₹" : "$"
              
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                  <Card className={`h-full flex flex-col relative bg-gradient-to-br from-gray-900 to-black border-2 transition-all ${
                    plan.popular 
                      ? "border-red-600 shadow-2xl shadow-red-600/50 scale-105" 
                      : "border-red-600/30 hover:border-red-600"
                  }`}>
                    {plan.popular && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                      >
                        <Badge className="bg-red-600 text-white px-4 py-1 text-sm font-semibold flex items-center gap-1">
                          <Star className="h-3 w-3 fill-white" />
                          Most Popular
                        </Badge>
                      </motion.div>
                    )}
                    
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-2xl font-bold text-red-600">{plan.name}</CardTitle>
                      <p className="text-sm text-gray-400 mt-2">{plan.description}</p>
                    </CardHeader>
                    
                    <CardContent className="flex-1 flex flex-col">
                      <div className="text-center mb-6">
                        <div className="flex items-baseline justify-center">
                          <span className="text-4xl font-bold text-white">{symbol}{price.toLocaleString()}</span>
                        </div>
                        <p className="text-sm text-gray-400 mt-1">{getPeriodLabel()}</p>
                        {billingPeriod !== "monthly" && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-xs text-green-400 mt-1"
                          >
                            Save {billingPeriod === "quarterly" ? "10%" : "20%"}
                          </motion.p>
                        )}
                      </div>
                      
                      <ul className="space-y-3 mb-8 flex-1">
                        {plan.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            className="flex items-start"
                          >
                            <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-300">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      
                      <Button 
                        asChild 
                        className={`w-full ${plan.popular ? "bg-red-600 hover:bg-red-700" : "bg-gray-800 hover:bg-red-600 border border-red-600/50"} transition-all`}
                        size="lg"
                      >
                        <Link href={`/payment?plan=${plan.id}&currency=${currency}&period=${billingPeriod}`}>
                          Select Plan <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-red-600">Membership Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: CheckCircle, title: "No Long-term Contracts", desc: "Cancel anytime with 30 days notice" },
                { icon: TrendingUp, title: "Free Trial Available", desc: "Try our facilities for 3 days free" },
                { icon: DollarSign, title: "Flexible Payment Options", desc: "Monthly, quarterly, or annual payments" },
                { icon: Zap, title: "Upgrade Anytime", desc: "Upgrade your plan as your needs grow" },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="bg-black border-red-600/30 hover:border-red-600 transition-colors">
                    <CardContent className="p-6">
                      <benefit.icon className="h-6 w-6 text-red-600 mb-3" />
                      <h3 className="font-semibold mb-1 text-white">{benefit.title}</h3>
                      <p className="text-gray-400 text-sm">{benefit.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
