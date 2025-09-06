# Subscription-Tracker
A RESTful API for managing and tracking recurring subscriptions, built with Node.js, Express.js and  MongoDB. Helps users monitor expenses and stay on top of upcoming payments.

## Features
- Add and manage subscriptions
- Automatic **email reminders** at multiple intervals (7, 5, 2, 1 days before renewal)
- Email templating system with dynamic data
- Database persistence using **MongoDB + Mongoose**
- Workflow scheduling powered by **Upstash Workflows**

## Tech Stack
- **Node.js + Express** → REST API server
- **MongoDB Atlas** → Database
- **Day.js** → Date manipulation
- **Nodemailer** → Email sending
- **Upstash Workflows** → Delayed task scheduling
- **dotenv** → Environment variables

###  Clone repo

    git clone https://github.com/diyasikka222/subscription-tracker.git
    cd subscription-tracker

### Install dependencies
    npm install

### Environment variables

     PORT=5500
     DB_URI=your_mongodb_connection
     NODE_ENV=development

     #SERVER
     SERVER_URL=your_server_url

     # JWT AUTH
     JWT_SECRET=your_jwt_secret
     JWT_EXPIRES_IN="1d"

     # ARCJET
     ARCJET_KEY=your_arcjet_key
     ARCJET_ENV= "development"

    # UPSTASH
    QSTASH_URL=your_qstash_url
    QSTASH_TOKEN=your_qstash_token

    # Nodemailer
    EMAIL_USER=your_email@gmail.com
    EMAIL_PASSWORD=your_email_app_password

### Run app
    npm run dev