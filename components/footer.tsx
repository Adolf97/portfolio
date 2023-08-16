import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
      <small className='mb-2 text-xs block'>
        &copy; 2025 Adolfo Ramírez. All rights reserved.
      </small>
      <p className='text-xs '>
        <span className='font-semibold'>About this website: </span>
        built with <AiFillHeart className="text-red-700 inline" /> and a little bit of React and Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, and Vercel hosting.
      </p>
    </footer>
  )
}
