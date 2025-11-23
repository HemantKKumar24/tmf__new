# Quick Setup Guide

## Step-by-Step Setup

### 1. Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="mysql://user:password@host:port/database?sslaccept=strict"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-this-with-openssl-rand-base64-32"
```

### 2. Generate NextAuth Secret

Run this command to generate a secure secret:

```bash
openssl rand -base64 32
```

Copy the output and paste it as `NEXTAUTH_SECRET` in your `.env` file.

### 3. Database Setup

#### For PlanetScale:

1. Go to [planetscale.com](https://planetscale.com) and create an account
2. Create a new database
3. Copy the connection string (it will look like: `mysql://xxxxx:xxxxx@aws.connect.psdb.cloud/database?sslaccept=strict`)
4. Paste it as `DATABASE_URL` in your `.env` file

#### For Local MySQL:

1. Install MySQL on your system
2. Create a database: `CREATE DATABASE team_muscle_fitness;`
3. Update `DATABASE_URL` in `.env`:
   ```
   DATABASE_URL="mysql://root:password@localhost:3306/team_muscle_fitness"
   ```

### 4. Initialize Database

```bash
# Generate Prisma Client
npx prisma generate

# Push schema to database
npx prisma db push
```

### 5. Add Favicon

1. Convert your logo to `.ico` format
2. Replace `app/favicon.ico` with your favicon
3. For better support, also add:
   - `app/icon.png` (512x512)
   - `app/apple-icon.png` (180x180)

### 6. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## What You Need to Provide

1. **Database Connection**: Set up PlanetScale or local MySQL
2. **NextAuth Secret**: Generate using the command above
3. **Favicon**: Your gym logo as favicon
4. **Payment Gateway Keys**: (Optional) If you want to integrate payments
   - Razorpay keys for India
   - Or Stripe/PayPal keys

## Testing the Setup

1. Visit the home page - should load without errors
2. Try registering a new account at `/register`
3. Login at `/login`
4. Check the dashboard at `/dashboard` (after login)

## Common Issues

### "Prisma Client not generated"
Run: `npx prisma generate`

### "Database connection failed"
- Check your `DATABASE_URL` is correct
- Verify database credentials
- For PlanetScale: Make sure SSL is enabled

### "NextAuth secret missing"
- Make sure `NEXTAUTH_SECRET` is set in `.env`
- Restart the dev server after adding it

## Next Steps

1. Seed the database with initial data (plans, classes)
2. Configure payment gateway
3. Customize colors and branding
4. Add your gym photos
5. Deploy to production

