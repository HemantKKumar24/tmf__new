"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Clock, Users, Calendar, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const classes = [
  {
    id: "1",
    name: "Morning Cardio",
    instructor: "Rahemathkhan",
    dayOfWeek: 1, // Monday
    startTime: "06:00",
    endTime: "07:00",
    duration: 60,
    capacity: 30,
    enrolled: 22,
    description: "High-intensity cardio workout to start your day",
  },
  {
    id: "2",
    name: "Strength Training",
    instructor: "Rahemathkhan",
    dayOfWeek: 1,
    startTime: "07:00",
    endTime: "08:00",
    duration: 60,
    capacity: 20,
    enrolled: 18,
    description: "Build muscle and strength with expert guidance",
  },
  {
    id: "3",
    name: "Yoga & Flexibility",
    instructor: "Surendar",
    dayOfWeek: 1,
    startTime: "18:00",
    endTime: "19:00",
    duration: 60,
    capacity: 25,
    enrolled: 20,
    description: "Improve flexibility and find inner peace",
  },
  {
    id: "4",
    name: "HIIT Training",
    instructor: "Rahemathkhan",
    dayOfWeek: 1,
    startTime: "19:00",
    endTime: "20:00",
    duration: 60,
    capacity: 25,
    enrolled: 25,
    description: "High-intensity interval training for maximum results",
  },
  {
    id: "5",
    name: "Zumba Dance",
    instructor: "Surendar",
    dayOfWeek: 2, // Tuesday
    startTime: "18:00",
    endTime: "19:00",
    duration: 60,
    capacity: 30,
    enrolled: 28,
    description: "Fun dance workout to burn calories",
  },
  {
    id: "6",
    name: "CrossFit",
    instructor: "Rahemathkhan",
    dayOfWeek: 2,
    startTime: "19:00",
    endTime: "20:00",
    duration: 60,
    capacity: 20,
    enrolled: 20,
    description: "Intense functional fitness training",
  },
  {
    id: "7",
    name: "Pilates",
    instructor: "Rahemathkhan",
    dayOfWeek: 3, // Wednesday
    startTime: "07:00",
    endTime: "08:00",
    duration: 60,
    capacity: 20,
    enrolled: 15,
    description: "Core strengthening and body alignment",
  },
  {
    id: "8",
    name: "Boxing",
    instructor: "Rahemathkhan",
    dayOfWeek: 3,
    startTime: "19:00",
    endTime: "20:00",
    duration: 60,
    capacity: 15,
    enrolled: 12,
    description: "Learn boxing techniques and get fit",
  },
  {
    id: "9",
    name: "Spin Class",
    instructor: "Rahemathkhan",
    dayOfWeek: 4, // Thursday
    startTime: "18:00",
    endTime: "19:00",
    duration: 60,
    capacity: 20,
    enrolled: 18,
    description: "Indoor cycling for cardiovascular fitness",
  },
  {
    id: "10",
    name: "Body Combat",
    instructor: "Rahemathkhan",
    dayOfWeek: 5, // Friday
    startTime: "18:00",
    endTime: "19:00",
    duration: 60,
    capacity: 25,
    enrolled: 22,
    description: "Martial arts-inspired workout",
  },
  {
    id: "11",
    name: "Power Yoga",
    instructor: "Surendar",
    dayOfWeek: 6, // Saturday
    startTime: "07:00",
    endTime: "08:00",
    duration: 60,
    capacity: 25,
    enrolled: 20,
    description: "Dynamic yoga flow for strength and flexibility",
  },
  {
    id: "12",
    name: "Bootcamp",
    instructor: "Rahemathkhan",
    dayOfWeek: 0, // Sunday
    startTime: "07:00",
    endTime: "08:00",
    duration: 60,
    capacity: 30,
    enrolled: 25,
    description: "Outdoor-style training indoors",
  },
]

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState<number>(new Date().getDay())

  const getClassesForDay = (day: number) => {
    return classes.filter((cls) => cls.dayOfWeek === day)
  }

  const isFull = (cls: typeof classes[0]) => cls.enrolled >= cls.capacity

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">Class Schedule</h1>
            <p className="text-xl text-gray-300">
              Book your favorite classes and train with expert instructors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schedule */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 to-transparent z-10"></div>
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/bg_pic/16.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Tabs value={selectedDay.toString()} onValueChange={(val) => setSelectedDay(parseInt(val))} className="w-full">
            <TabsList className="grid w-full grid-cols-7 mb-8">
              {daysOfWeek.map((day, index) => (
                <TabsTrigger key={index} value={index.toString()} className="text-xs md:text-sm">
                  {day.slice(0, 3)}
                </TabsTrigger>
              ))}
            </TabsList>

            {daysOfWeek.map((day, dayIndex) => {
              const dayClasses = getClassesForDay(dayIndex)
              return (
                <TabsContent key={dayIndex} value={dayIndex.toString()}>
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold mb-2">{day}</h2>
                    <p className="text-gray-600">
                      {dayClasses.length} {dayClasses.length === 1 ? "class" : "classes"} available
                    </p>
                  </div>
                  
                  {dayClasses.length === 0 ? (
                    <Card>
                      <CardContent className="py-12 text-center">
                        <p className="text-gray-500">No classes scheduled for {day}</p>
                      </CardContent>
                    </Card>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {dayClasses.map((cls) => (
                        <motion.div
                          key={cls.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CardContainer containerClassName="py-0" className="w-full">
                            <CardBody className="h-full hover:shadow-lg transition-shadow rounded-xl">
                              <CardItem translateZ="50" className="p-6">
                                <div className="flex items-start justify-between">
                                  <CardTitle className="text-xl">{cls.name}</CardTitle>
                                  {isFull(cls) && (
                                    <Badge variant="destructive">Full</Badge>
                                  )}
                                </div>
                                <p className="text-sm text-gray-600 mt-2">{cls.description}</p>
                              </CardItem>
                              <CardItem translateZ="40" className="p-6 pt-0">
                              <div className="space-y-3 mb-4">
                                <div className="flex items-center text-sm">
                                  <Users className="h-4 w-4 mr-2 text-red-600" />
                                  <span className="font-medium">{cls.instructor}</span>
                                </div>
                                <div className="flex items-center text-sm">
                                  <Clock className="h-4 w-4 mr-2 text-red-600" />
                                  <span>{cls.startTime} - {cls.endTime}</span>
                                  <span className="ml-2 text-gray-500">({cls.duration} min)</span>
                                </div>
                                <div className="flex items-center text-sm">
                                  <Users className="h-4 w-4 mr-2 text-red-600" />
                                  <span>
                                    {cls.enrolled}/{cls.capacity} enrolled
                                  </span>
                                </div>
                              </div>
                              <Button 
                                className="w-full" 
                                disabled={isFull(cls)}
                                variant={isFull(cls) ? "outline" : "default"}
                              >
                                {isFull(cls) ? "Class Full" : "Book Class"}
                              </Button>
                              </CardItem>
                            </CardBody>
                          </CardContainer>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </section>

      {/* Gym Hours */}
      <section className="relative py-20 bg-black overflow-hidden">
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Calendar className="h-6 w-6 mr-2 text-red-600" />
                  Gym Working Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="font-medium text-white">Monday - Saturday</span>
                    <div className="text-right">
                      <div className="text-white">6:00 AM - 11:00 AM</div>
                      <div className="text-sm text-gray-300">5:00 PM - 10:00 PM</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="font-medium text-white">Sunday</span>
                    <div className="text-right">
                      <div className="text-white">6:00 AM - 10:00 AM</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-red-600/10 border border-red-600/30 rounded-lg">
                  <p className="text-sm text-gray-300">
                    <CheckCircle className="h-4 w-4 inline mr-2 text-red-600" />
                    Please arrive 10 minutes before your scheduled class
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

