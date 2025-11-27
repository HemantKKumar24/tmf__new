"use client"

import { motion } from "framer-motion"
import {
  Award, Users, Globe, CheckCircle, Star, Trophy, Target, Heart, Dumbbell, TrendingUp,
  Activity, Zap, Flame, Apple, Pill, Stethoscope, Brain, Shield, Sparkles, Dumbbell as DumbbellIcon,
  HeartPulse, Syringe, Scale, Waves, Bike, Timer, UtensilsCrossed, Home
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const certifications = [
  "ACSM (American College of Sports Medicine)",
  "NSCA (National Strength and Conditioning Association)",
  "ACE (American Council on Exercise)",
  "Master Personal Trainer",
  "Diploma in Bodybuilding Specialist from London University",
]

const specializations = [
  { name: "Clinical Nutrition", icon: Apple },
  { name: "Crossfit", icon: Flame },
  { name: "HIIT", icon: Zap },
  { name: "Home Workouts", icon: Home },
  { name: "Pain Management", icon: Pill },
  { name: "Physiotherapy", icon: Stethoscope },
  { name: "Powerlifting", icon: DumbbellIcon },
  { name: "Sports Nutrition", icon: UtensilsCrossed },
  { name: "Sports Specific Training", icon: Target },
  { name: "Strength Training", icon: Activity },
  { name: "Weightlifting", icon: DumbbellIcon },
  { name: "Wellbeing", icon: HeartPulse },
  { name: "Women Health Specialization", icon: Heart },
  { name: "Bodybuilding Transformation", icon: Trophy },
]

const stats = [
  { icon: Users, label: "Years Experience", value: "23+" },
  { icon: Trophy, label: "Clients Coached", value: "2,500+" },
  { icon: Globe, label: "Languages", value: "4" },
  { icon: Award, label: "Certifications", value: "5+" },
]

export default function CoachesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />

      {/* Header */}
      <section className="relative bg-gradient-to-br from-black via-red-950 to-black py-20 overflow-hidden">
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-6"
            >
              <Trophy className="h-16 w-16 text-red-600 mx-auto" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent font-heading">
              Meet Our Expert Coaches
            </h1>
            <p className="text-xl text-gray-300">
              World-class trainers dedicated to your transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Coach - Rahemath Khan */}
      <section className="relative py-20 bg-black overflow-hidden">
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
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
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            {/* Coach Image with Animated Border */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12 flex justify-center"
            >
              <div className="relative group">
                {/* Animated Border */}
                <div className="absolute -inset-2 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-lg opacity-75 group-hover:opacity-100 blur-sm animate-pulse"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-red-400 to-red-600 rounded-lg opacity-50 animate-spin-slow"></div>

                {/* Image Container */}
                <div className="relative rounded-lg overflow-hidden border-4 border-red-600 shadow-2xl">
                  <motion.img
                    src="/bg_pic/19.jpeg"
                    alt="Mohammed Rahemathkhan - Master Trainer"
                    className="w-full max-w-md h-auto object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Badge Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-red-600 text-white text-lg px-4 py-2">
                      Founder & Master Trainer
                    </Badge>
                  </div>
                </div>
              </div>
            </motion.div>

            <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-red-600/50 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Side - Info */}
                <div className="p-8 lg:p-12">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <Badge className="mb-4 bg-red-600 text-white">Founder & Master Trainer</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-600">
                      Mohammed Rahemathkhan
                    </h2>
                    <p className="text-xl text-gray-300 mb-6">
                      Master Personal Trainer | Bodybuilding Transformation Specialist
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-gray-900 p-4 rounded-lg border border-red-600/30"
                        >
                          <stat.icon className="h-6 w-6 text-red-600 mb-2" />
                          <div className="text-2xl font-bold text-white">{stat.value}</div>
                          <div className="text-sm text-gray-400">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Languages */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3 text-red-600">Languages Spoken</h3>
                      <div className="flex flex-wrap gap-2">
                        {["English", "Hindi", "Telugu", "Urdu"].map((lang, idx) => (
                          <Badge key={idx} variant="outline" className="border-red-600/50 text-gray-300">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Availability */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-red-600">Availability</h3>
                      <div className="flex gap-2">
                        <Badge className="bg-red-600 text-white">In-person(Branch)</Badge>
                        <Badge className="bg-red-600 text-white">Online (USA | Australia | Sweden | Germany)</Badge>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Right Side - Details */}
                <div className="p-8 lg:p-12 bg-gray-900/50">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 className="text-2xl font-bold mb-6 text-red-600">About</h3>
                    <p className="text-gray-300 leading-relaxed mb-8">
                      Introducing Mohammad Rahmat Khan — a powerhouse in the global fitness industry with over 23 years of hands-on experience and a proven track record of transforming lives.
                      With 2,500+ clients served, Mohammad has earned his reputation as a renowned bodybuilding expert and coach, a transformation specialist, and a lifestyle mentor who approaches fitness through a holistic lens.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-8">
                      His expertise extends beyond training — he is also a certified nutritionist and dietitian, enabling him to craft complete, science-based programs tailored to every individual’s body, goals, and lifestyle.

                      Mohammad’s impact isn’t limited by borders. Through his highly successful online coaching platform, he works with clients across the United States, Australia, Sweden, Germany, and more, helping people around the world unlock their peak physical and mental potential. </p>
                    <p className="text-gray-300 leading-relaxed mb-8">
                      His expertise extends beyond training — he is also a certified nutritionist and dietitian, enabling him to craft complete, science-based programs tailored to every individual’s body, goals, and lifestyle.

                      Mohammad’s impact isn’t limited by borders. Through his highly successful online coaching platform, he works with clients across the United States, Australia, Sweden, Germany, and more, helping people around the world unlock their peak physical and mental potential. </p>

                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
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
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-red-600">
              Certifications & Credentials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-black border-red-600/30 hover:border-red-600 transition-colors">
                    <CardContent className="p-4 flex items-center">
                      <Award className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{cert}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specializations */}
      <section className="relative py-20 bg-black overflow-hidden">
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-red-600">
              Specializations
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {specializations.map((spec, index) => {
                const IconComponent = spec.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, rotate: 5, y: -5 }}
                    className="cursor-pointer"
                  >
                    <Card className="bg-gradient-to-br from-gray-900 to-black border-red-600/30 hover:border-red-600 transition-all group">
                      <CardContent className="p-6 text-center">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                          className="mb-3"
                        >
                          <IconComponent className="h-8 w-8 text-red-600 mx-auto group-hover:text-red-400 transition-colors" />
                        </motion.div>
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">{spec.name}</span>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Special Populations */}
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
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-600">
              Special Population Expertise
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Specialized expertise in strength, nutrition, and injury management for:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { name: "Thyroid", icon: Activity, color: "text-red-600" },
                { name: "Diabetic", icon: HeartPulse, color: "text-red-500" },
                { name: "PCOD/PCOS", icon: Heart, color: "text-red-400" },
                { name: "Hormonal Imbalance", icon: Brain, color: "text-red-600" },
              ].map((condition, index) => {
                const IconComponent = condition.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="cursor-pointer"
                  >
                    <Card className="bg-black border-2 border-red-600/50 hover:border-red-600 transition-all group">
                      <CardContent className="p-6 text-center">
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, -10, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3
                          }}
                          className="mb-4"
                        >
                          <IconComponent className={`h-12 w-12 ${condition.color} mx-auto group-hover:scale-110 transition-transform`} />
                        </motion.div>
                        <h3 className="font-semibold text-white group-hover:text-red-400 transition-colors">{condition.name}</h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Second Coach - Surendar */}
      <section className="relative py-20 bg-black overflow-hidden">
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-red-950 to-transparent z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-red-600/50">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl md:text-4xl text-red-600 mb-4">Surendar</CardTitle>
                <Badge className="bg-red-600 text-white w-fit mx-auto">Professional Trainer</Badge>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-300 text-center leading-relaxed">
                  Our dedicated professional trainer Surendar brings expertise and passion to help you
                  achieve your fitness goals. With years of experience in personal training and group
                  fitness, Surendar is committed to providing personalized guidance and motivation
                  to every member.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-gradient-to-br from-red-950 to-black overflow-hidden">
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-red-950 to-transparent z-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our expert coaches and start your fitness journey today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/register">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Get Started
                </button>
              </a>
              <a href="/contact">
                <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Contact Us
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

