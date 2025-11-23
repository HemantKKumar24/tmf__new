// Prisma seed - will work once Prisma is set up
let PrismaClient: any
try {
  const prismaModule = require('@prisma/client')
  PrismaClient = prismaModule.PrismaClient
} catch (e) {
  PrismaClient = null
}

const prisma = PrismaClient ? new PrismaClient() : null

async function main() {
  if (!prisma) {
    console.log('Prisma is not set up yet. Skipping seed.')
    return
  }
  console.log('Seeding database...')

  // Create Plans
  const basicPlan = await prisma.plan.upsert({
    where: { id: 'basic' },
    update: {},
    create: {
      id: 'basic',
      name: 'Basic',
      description: 'Perfect for beginners starting their fitness journey',
      price: 1999,
      duration: 30,
      features: JSON.stringify([
        'Access to gym facilities',
        'Basic equipment usage',
        'Locker facility',
        'Monthly fitness assessment',
        'Group workout sessions',
        'Gym access during working hours',
      ]),
      isPopular: false,
    },
  })

  const silverPlan = await prisma.plan.upsert({
    where: { id: 'silver' },
    update: {},
    create: {
      id: 'silver',
      name: 'Silver',
      description: 'Most popular choice with personal training',
      price: 2999,
      duration: 30,
      features: JSON.stringify([
        'Everything in Basic',
        '2 Personal trainer sessions per month',
        'Nutrition guidance',
        'Progress tracking & reports',
        'Priority class booking',
        'Access to premium equipment',
        'Monthly body composition analysis',
      ]),
      isPopular: true,
    },
  })

  const goldPlan = await prisma.plan.upsert({
    where: { id: 'gold' },
    update: {},
    create: {
      id: 'gold',
      name: 'Gold',
      description: 'Ultimate fitness experience with VIP benefits',
      price: 4999,
      duration: 30,
      features: JSON.stringify([
        'Everything in Silver',
        'Unlimited personal trainer sessions',
        'Custom meal plans',
        '24/7 gym access',
        'Spa & recovery sessions',
        'VIP lounge access',
        'Quarterly fitness retreat',
        'Priority support',
        'Guest passes (2 per month)',
      ]),
      isPopular: false,
    },
  })

  const platinumPlan = await prisma.plan.upsert({
    where: { id: 'platinum' },
    update: {},
    create: {
      id: 'platinum',
      name: 'Platinum',
      description: 'Elite membership with exclusive perks',
      price: 7999,
      duration: 30,
      features: JSON.stringify([
        'Everything in Gold',
        'Dedicated personal trainer',
        'Home workout plans',
        'Nutritionist consultations',
        'Physiotherapy sessions',
        'Exclusive events & workshops',
        'Unlimited guest passes',
        'Complimentary supplements',
        'Annual fitness assessment',
      ]),
      isPopular: false,
    },
  })

  // Create Sample Classes (delete existing first)
  await prisma.class.deleteMany({})

  const classes = [
    {
      name: 'Morning Cardio',
      instructor: 'Rajesh Kumar',
      dayOfWeek: 1, // Monday
      startTime: '06:00',
      endTime: '07:00',
      duration: 60,
      capacity: 30,
      description: 'High-intensity cardio workout to start your day',
    },
    {
      name: 'Strength Training',
      instructor: 'Priya Sharma',
      dayOfWeek: 1,
      startTime: '07:00',
      endTime: '08:00',
      duration: 60,
      capacity: 20,
      description: 'Build muscle and strength with expert guidance',
    },
    {
      name: 'Yoga & Flexibility',
      instructor: 'Anita Reddy',
      dayOfWeek: 1,
      startTime: '18:00',
      endTime: '19:00',
      duration: 60,
      capacity: 25,
      description: 'Improve flexibility and find inner peace',
    },
    {
      name: 'HIIT Training',
      instructor: 'Vikram Singh',
      dayOfWeek: 1,
      startTime: '19:00',
      endTime: '20:00',
      duration: 60,
      capacity: 25,
      description: 'High-intensity interval training for maximum results',
    },
    {
      name: 'Zumba Dance',
      instructor: 'Meera Patel',
      dayOfWeek: 2, // Tuesday
      startTime: '18:00',
      endTime: '19:00',
      duration: 60,
      capacity: 30,
      description: 'Fun dance workout to burn calories',
    },
    {
      name: 'CrossFit',
      instructor: 'Arjun Nair',
      dayOfWeek: 2,
      startTime: '19:00',
      endTime: '20:00',
      duration: 60,
      capacity: 20,
      description: 'Intense functional fitness training',
    },
  ]

  for (const classData of classes) {
    await prisma.class.createMany({
      data: classData,
      skipDuplicates: true,
    })
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    if (prisma) {
      await prisma.$disconnect()
    }
  })

