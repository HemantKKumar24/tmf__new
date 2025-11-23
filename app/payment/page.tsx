"use client"

import { useState, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { CreditCard, CheckCircle, AlertCircle, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const plans: Record<string, { name: string; price: number }> = {
  basic: { name: "Basic", price: 1999 },
  silver: { name: "Silver", price: 2999 },
  gold: { name: "Gold", price: 4999 },
  platinum: { name: "Platinum", price: 7999 },
}

function PaymentContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const planId = searchParams.get("plan") || "basic"
  const selectedPlan = plans[planId] || plans.basic

  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    // Simulate payment processing
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setTimeout(() => {
        router.push("/dashboard")
      }, 2000)
    }, 2000)
  }

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
      return parts.join(" ")
    } else {
      return v
    }
  }

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4)
    }
    return v
  }

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      
      <section className="flex-1 bg-gradient-to-br from-black via-gray-900 to-black py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-2 text-white">Complete Your Payment</h1>
              <p className="text-gray-300">Secure payment for your membership</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Payment Form */}
              <div className="lg:col-span-2">
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <CreditCard className="h-5 w-5 mr-2" />
                      Payment Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {success ? (
                      <Alert className="bg-green-600/20 border-green-600/50">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <AlertDescription className="text-green-300">
                          Payment successful! Redirecting to dashboard...
                        </AlertDescription>
                      </Alert>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                          <Alert variant="destructive">
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>{error}</AlertDescription>
                          </Alert>
                        )}

                        <div className="space-y-2">
                          <Label htmlFor="cardName" className="text-white">Cardholder Name</Label>
                          <Input
                            id="cardName"
                            placeholder="John Doe"
                            value={formData.cardName}
                            onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
                            required
                            className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-red-600"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="cardNumber" className="text-white">Card Number</Label>
                          <Input
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            value={formData.cardNumber}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                cardNumber: formatCardNumber(e.target.value),
                              })
                            }
                            maxLength={19}
                            required
                            className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-red-600"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiryDate" className="text-white">Expiry Date</Label>
                            <Input
                              id="expiryDate"
                              placeholder="MM/YY"
                              value={formData.expiryDate}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  expiryDate: formatExpiryDate(e.target.value),
                                })
                              }
                              maxLength={5}
                              required
                              className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-red-600"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv" className="text-white">CVV</Label>
                            <Input
                              id="cvv"
                              placeholder="123"
                              type="password"
                              value={formData.cvv}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  cvv: e.target.value.replace(/\D/g, "").slice(0, 3),
                                })
                              }
                              maxLength={3}
                              required
                              className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-red-600"
                            />
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 text-sm text-gray-300">
                          <Lock className="h-4 w-4" />
                          <span>Your payment information is secure and encrypted</span>
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-red-600 hover:bg-red-700"
                          disabled={loading}
                        >
                          {loading ? "Processing..." : `Pay ₹${selectedPlan.price.toLocaleString()}`}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div>
                <Card className="sticky top-24 bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Plan</span>
                        <span className="font-semibold text-white">{selectedPlan.name}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Duration</span>
                        <span className="font-semibold text-white">1 Month</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Subtotal</span>
                        <span className="font-semibold text-white">₹{selectedPlan.price.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">GST (18%)</span>
                        <span className="font-semibold text-white">
                          ₹{Math.round(selectedPlan.price * 0.18).toLocaleString()}
                        </span>
                      </div>
                      <div className="border-t border-gray-700 pt-2 mt-4">
                        <div className="flex justify-between">
                          <span className="text-lg font-bold text-white">Total</span>
                          <span className="text-lg font-bold text-red-600">
                            ₹{Math.round(selectedPlan.price * 1.18).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default function PaymentPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex flex-col bg-black text-white">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4 text-white">Loading...</h1>
          </div>
        </div>
        <Footer />
      </div>
    }>
      <PaymentContent />
    </Suspense>
  )
}

