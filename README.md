# Rice Mill Website

A modern, responsive website for a premium rice producer, built with Next.js, React, and Tailwind CSS.

## Features

- Clean, minimalist design
- Fully responsive for all device sizes
- Component-based architecture
- Optimized for performance
- Firebase integration ready

## Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/src/app`: Next.js app router pages
- `/src/components`: Reusable React components
  - `/ui`: Basic UI components (Button, Input)
  - `/layout`: Layout components (Navbar, Footer)
  - `/sections`: Page sections (Banner, Products, etc.)
- `/src/lib`: Utility functions and data
- `/public`: Static assets

## Building for Production

```bash
npm run build
```

## Firebase Integration

This project is structured to easily integrate with Firebase:

1. Install Firebase:

   ```bash
   npm install firebase
   ```

2. Create a Firebase configuration file at `src/lib/firebase.js`:

   ```javascript
   import { initializeApp } from "firebase/app";
   import { getFirestore } from "firebase/firestore";
   import { getStorage } from "firebase/storage";
   import { getAuth } from "firebase/auth";

   const firebaseConfig = {
     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
   };

   const app = initializeApp(firebaseConfig);

   export const db = getFirestore(app);
   export const storage = getStorage(app);
   export const auth = getAuth(app);
   ```

3. Create a `.env.local` file in the project root with your Firebase credentials.

## Deployment

1. Install Firebase CLI:

   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:

   ```bash
   firebase login
   ```

3. Initialize Firebase:

   ```bash
   firebase init
   ```

4. Deploy:
   ```bash
   npm run build
   firebase deploy
   ```

## Customization

- Modify the data in `src/lib/data.js` to update products and company information
- Replace images in the `public/images` directory
- Adjust colors in `tailwind.config.js` and `globals.css`
