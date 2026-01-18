# ItemHub - Next.js 16 Product Management App

A beginner-friendly product management application built with Next.js 16 (App Router) using JavaScript (.jsx files).

## 🌟 Features

### ✅ Core Features
1. **Landing Page** - 7 beautifully designed sections
   - Hero section with call-to-action
   - Features showcase
   - Categories grid
   - How It Works steps
   - Statistics display
   - Customer testimonials
   - Final CTA section

2. **Authentication System**
   - Mock login with hardcoded credentials
   - Cookie-based session management
   - Protected routes for unauthorized users
   - Automatic redirect to login when accessing protected pages

3. **Items List Page**
   - Browse all products
   - Responsive grid layout
   - Item cards with key information

4. **Item Details Page**
   - Complete product information
   - Add to cart functionality

5. **Add Item Page (Protected)**
   - Form to add new products
   - Image URL input with preview
   - Category selection
   - Stock management
   - Toast notifications

### 🚀 Additional Features
- Responsive design (mobile, tablet, desktop)
- Toast notifications for user feedback
- Loading states and error handling
- Clean, modern UI with Tailwind CSS
- Interactive components with hover effects
- SEO optimized with proper metadata

## 🛠️ Tech Stack

- **Frontend**: Next.js 16 (App Router)
- **Language**: JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Routing**: Next.js App Router

## 🔐 Login Credentials
Use these credentials to login:

Email: admin@example.com
Password: 123456

## Routes Summary

| Route         | Access    | Description                                  |
| ------------- | --------- | -------------------------------------------- |
| `/`           | Public    | Landing page with 7 sections                 |
| `/items`      | Public    | List of all products                         |
| `/items/[id]` | Public    | Detailed view of a single product            |
| `/login`      | Public    | Login page for authentication                |
| `/add-item`   | Protected | Add a new product (authenticated users only) |


## 📦 Installation & Setup

### 1. Clone and Install
```bash
# Clone the repository
git clone <repository-url>
cd nextjs-item-app

# Install dependencies
npm install



