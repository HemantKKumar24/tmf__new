# TEAM MUSCLE FITNESS GYM - Website

A modern, feature-rich gym website built with Next.js, featuring membership plans, class scheduling, payment integration, and more.

## 🚀 Tech Stack

- **Frontend**: Next.js 16 (React), TypeScript, Tailwind CSS
- **UI Libraries**: ShadCN UI, Aceternity UI, Framer Motion
- **Forms**: React Hook Form, Zod
- **Backend**: Next.js API Routes
- **Database**: MySQL (PlanetScale)
- **ORM**: Prisma
- **Authentication**: NextAuth.js
- **Payment**: (Configure your preferred payment gateway)

## 📋 Features

- ✅ Beautiful, modern UI with animations
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ User authentication (Login/Register)
- ✅ Membership plans (Basic, Silver, Gold, Platinum)
- ✅ Class schedule and booking
- ✅ Payment integration
- ✅ Testimonials section
- ✅ About, Contact, FAQ pages
- ✅ User dashboard
- ✅ Admin features (ready for extension)

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm installed
- PlanetScale account (or any MySQL database)
- NextAuth secret key

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="mysql://user:password@host:port/database?sslaccept=strict"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here-generate-with-openssl-rand-base64-32"

# Payment (Example - Razorpay)
NEXT_PUBLIC_RAZORPAY_KEY="your-razorpay-key"
RAZORPAY_SECRET="your-razorpay-secret"
```

**Generate NextAuth Secret:**
```bash
openssl rand -base64 32
```

### 3. Set Up Database

#### Option A: Using PlanetScale

1. Create a new database on [PlanetScale](https://planetscale.com)
2. Copy the connection string
3. Update `DATABASE_URL` in `.env`

#### Option B: Using Local MySQL

1. Install MySQL locally
2. Create a database
3. Update `DATABASE_URL` in `.env`

### 4. Run Database Migrations

```bash
npx prisma generate
npx prisma db push
```

### 5. Add Favicon

1. Convert your logo image to favicon format
2. Replace `app/favicon.ico` with your favicon
3. Optionally add other sizes: `app/icon.png`, `app/apple-icon.png`

### 6. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/
│   ├── api/              # API routes
│   │   ├── auth/         # Authentication endpoints
│   │   ├── plans/        # Membership plans
│   │   └── classes/      # Class schedules
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── dashboard/        # User dashboard
│   ├── faq/              # FAQ page
│   ├── login/            # Login page
│   ├── payment/          # Payment page
│   ├── plans/            # Membership plans page
│   ├── register/         # Registration page
│   ├── schedule/         # Class schedule page
│   ├── testimonials/     # Testimonials page
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── ui/               # ShadCN UI components
│   ├── navbar.tsx        # Navigation bar
│   └── footer.tsx        # Footer component
├── lib/
│   ├── prisma.ts         # Prisma client
│   ├── auth.ts           # Auth utilities
│   └── utils.ts          # Utility functions
└── prisma/
    └── schema.prisma     # Database schema
```

## 🎨 Customization

### Update Gym Information

1. **Gym Name**: Search and replace "TEAM MUSCLE FITNESS" throughout the codebase
2. **Address**: Update in `components/footer.tsx` and `app/about/page.tsx`
3. **Phone**: Update in `components/footer.tsx` and `app/contact/page.tsx`
4. **Working Hours**: Update in `components/footer.tsx` and `app/schedule/page.tsx`

### Update Colors

The primary color (red) is used throughout. To change:
1. Update Tailwind classes: `bg-red-600`, `text-red-600`, etc.
2. Update CSS variables in `app/globals.css`

### Add Logo

1. Add your logo image to `public/logo.png`
2. Update references in `components/navbar.tsx` and `components/footer.tsx`

## 🔐 Authentication

The app uses NextAuth.js with credentials provider. Users can:
- Register with email and password
- Login with credentials
- Access protected routes (dashboard)

## 💳 Payment Integration

The payment page is set up but needs integration with your preferred payment gateway:
- Razorpay (India)
- Stripe
- PayPal
- Or any other gateway

Update `app/payment/page.tsx` and create API routes in `app/api/payment/` for your gateway.

## 📱 Pages

- **Home** (`/`) - Hero section, features, plans preview
- **Plans** (`/plans`) - Membership plans with pricing
- **Schedule** (`/schedule`) - Class schedule and booking
- **Testimonials** (`/testimonials`) - Client reviews
- **About** (`/about`) - About the gym
- **Contact** (`/contact`) - Contact form and information
- **FAQ** (`/faq`) - Frequently asked questions
- **Login** (`/login`) - User login
- **Register** (`/register`) - User registration
- **Payment** (`/payment`) - Payment processing
- **Dashboard** (`/dashboard`) - User dashboard (protected)

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

### Other Platforms

The app can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 Database Schema

The Prisma schema includes:
- **User** - User accounts
- **Plan** - Membership plans
- **Class** - Fitness classes
- **Booking** - Class bookings
- **Payment** - Payment records
- **Testimonial** - Client testimonials

## 🔧 Troubleshooting

### Database Connection Issues

- Verify `DATABASE_URL` is correct
- Check database credentials
- Ensure database is accessible

### Authentication Issues

- Verify `NEXTAUTH_SECRET` is set
- Check `NEXTAUTH_URL` matches your domain
- Clear browser cookies

### Build Errors

- Run `npx prisma generate` before building
- Check all environment variables are set
- Verify all dependencies are installed

## 📞 Support

For issues or questions:
- Email: info@teammusclefitness.com
- Phone: 077025 53859

## 📄 License

This project is proprietary and confidential.

---

Built with ❤️ for TEAM MUSCLE FITNESS GYM
