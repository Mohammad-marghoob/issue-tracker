# Issue Tracker App

## Overview
The Issue Tracker App is a web-based application designed to help you track and manage issues efficiently. Built with modern technologies like Next.js, Prisma, MySQL, Zod, and Shadcn, this app provides a seamless user experience for issue tracking and management.

## Features
- **User Authentication**: Secure user authentication using NextAuth.js with GitHub OAuth.
- **Issue Management**: Create, update, and delete issues with detailed descriptions, statuses, and assignees.
- **Real-Time Updates**: Get real-time updates on issue statuses and changes.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Validation**: Robust form validation using Zod.
- **Database Integration**: Efficient data management with Prisma and MySQL.

## Technologies Used
- **Next.js**: A React framework for building fast and user-friendly web applications.
- **Prisma**: A modern database toolkit and ORM for TypeScript and JavaScript.
- **MySQL**: A popular relational database management system.
- **Zod**: A TypeScript-first schema declaration and validation library.
- **RadixUI**: A component library for building responsive and accessible UIs.
- **NextAuth.js**: Authentication for Next.js applications.

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- MySQL
- GitHub OAuth credentials

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/issue-tracker-app.git
   cd issue-tracker-app
   npm install
   complete .env file
   npx prisma migrate dev --name init
   npx prisma generate
   npm run dev
