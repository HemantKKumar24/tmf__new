"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const faqs = [
  {
    category: "Membership",
    questions: [
      {
        question: "What membership plans do you offer?",
        answer: "We offer four membership plans: Basic (₹1,999/month), Silver (₹2,999/month), Gold (₹4,999/month), and Platinum (₹7,999/month). Each plan comes with different benefits and access levels. Visit our Plans page for detailed information.",
      },
      {
        question: "Can I cancel my membership anytime?",
        answer: "Yes, you can cancel your membership at any time with a 30-day notice. We believe in flexibility and don't require long-term contracts.",
      },
      {
        question: "Do you offer a free trial?",
        answer: "Yes! We offer a 3-day free trial for new members. This allows you to experience our facilities and classes before committing to a membership.",
      },
      {
        question: "Can I upgrade or downgrade my plan?",
        answer: "Absolutely! You can upgrade or downgrade your membership plan at any time. Changes will be reflected in your next billing cycle.",
      },
    ],
  },
  {
    category: "Classes & Schedule",
    questions: [
      {
        question: "How do I book a class?",
        answer: "You can book classes through our website or mobile app. Simply select the class you want to attend and click 'Book Class'. Members with Silver, Gold, and Platinum plans get priority booking.",
      },
      {
        question: "What happens if I miss a class?",
        answer: "If you need to cancel a class, please do so at least 2 hours before the scheduled time. Late cancellations or no-shows may result in a fee for premium classes.",
      },
      {
        question: "Are classes included in all membership plans?",
        answer: "Yes, all membership plans include access to group classes. However, premium classes and personal training sessions vary by plan. Check the Plans page for specific details.",
      },
      {
        question: "What types of classes do you offer?",
        answer: "We offer a wide variety of classes including yoga, HIIT, strength training, cardio, Zumba, boxing, Pilates, spin classes, and more. Our schedule is updated weekly.",
      },
    ],
  },
  {
    category: "Facilities & Equipment",
    questions: [
      {
        question: "What equipment do you have?",
        answer: "We have state-of-the-art equipment from leading brands including cardio machines, free weights, strength training equipment, functional training areas, and specialized equipment for various workout styles.",
      },
      {
        question: "Do you have locker facilities?",
        answer: "Yes, we provide locker facilities for all members. You can bring your own lock or rent one from the front desk.",
      },
      {
        question: "Is parking available?",
        answer: "Yes, we have ample parking space available for our members. Parking is free of charge.",
      },
      {
        question: "Do you have showers and changing rooms?",
        answer: "Yes, we have clean and well-maintained shower facilities and separate changing rooms for men and women.",
      },
    ],
  },
  {
    category: "Personal Training",
    questions: [
      {
        question: "Do you offer personal training?",
        answer: "Yes, we have certified personal trainers available. Personal training sessions are included in Silver (2 sessions/month), Gold (unlimited), and Platinum (dedicated trainer) plans.",
      },
      {
        question: "Can I book additional personal training sessions?",
        answer: "Yes, you can book additional personal training sessions at an hourly rate. Contact the front desk for pricing and availability.",
      },
      {
        question: "What qualifications do your trainers have?",
        answer: "All our trainers are certified by recognized fitness organizations and have extensive experience. They undergo regular training to stay updated with the latest fitness trends and techniques.",
      },
    ],
  },
  {
    category: "General",
    questions: [
      {
        question: "What are your operating hours?",
        answer: "We're open Monday through Saturday from 6:00 AM - 11:00 AM and 5:00 PM - 10:00 PM. Sunday: 6:00 AM - 10:00 AM. Gold and Platinum members have 24/7 access.",
      },
      {
        question: "Do you offer nutrition guidance?",
        answer: "Yes, nutrition guidance is available for Silver, Gold, and Platinum members. Gold and Platinum members also receive custom meal plans.",
      },
      {
        question: "What should I bring for my first visit?",
        answer: "For your first visit, bring comfortable workout clothes, athletic shoes, a water bottle, and a towel. We provide all necessary equipment.",
      },
      {
        question: "Is there an age requirement?",
        answer: "Members must be at least 16 years old. Members under 18 require parental consent. We also offer special programs for seniors.",
      },
      {
        question: "How do I contact you?",
        answer: "You can reach us by phone at 077025 53859, email at Tmfitness71@gmail.com, or visit us at our location in Bowenpally, Hyderabad. You can also use the contact form on our website.",
      },
      {
        question: "Who developed this website?",
        answer: "This website was developed by Hemant Dobriyal. For website-related inquiries, you can contact: Email - ",
        answerWithLinks: true,
        email: "hemanthdobriyal@gmail.com",
        phone: "8686545253",
      },
    ],
  },
]

export default function FAQPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-300">
              Find answers to common questions about our gym, membership, and services
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 to-transparent z-10"></div>
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              {/* Category Box */}
              <div className="bg-gradient-to-br from-gray-800 via-gray-800/95 to-gray-900 border-2 border-red-600/40 rounded-xl p-6 shadow-2xl shadow-red-600/10 hover:shadow-red-600/20 transition-all duration-300 hover:border-red-600/60">
                <h2 className="text-2xl font-bold mb-6 text-red-600 flex items-center gap-3">
                  <span className="w-1 h-8 bg-red-600 rounded-full"></span>
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${categoryIndex}-${index}`} className="bg-gray-900/50 border border-red-600/30 mb-3 rounded-lg px-4 hover:border-red-600/50 transition-colors">
                      <AccordionTrigger className="text-left font-semibold hover:text-red-600 text-white">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 pt-2">
                        {faq.answerWithLinks && faq.email && faq.phone ? (
                          <>
                            {faq.answer}
                            <a 
                              href={`mailto:${faq.email}`} 
                              className="text-red-600 hover:text-red-500 hover:underline font-medium transition-colors"
                            >
                              {faq.email}
                            </a>
                            {", Phone - "}
                            <a 
                              href={`tel:${faq.phone}`} 
                              className="text-red-600 hover:text-red-500 hover:underline font-medium transition-colors"
                            >
                              {faq.phone}
                            </a>
                          </>
                        ) : (
                          faq.answer
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="relative py-20 bg-black overflow-hidden">
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Still Have Questions?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Can&apos;t find the answer you&apos;re looking for? Please get in touch with our friendly team.
            </p>
            <a href="/contact">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact Us
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

