/* eslint-disable react/no-unescaped-entities */
'use client';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const ThankYouPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col pt-[200px] items-center bg-gradient-to-br from-gray-800 to-gray-600 text-white">
      <h1 className="text-4xl font-bold mb-2">Welcome!</h1>
      <p className="mb-4 text-lg">Let's start shipping side products! You will receive a welcome email soon.</p>
      <Button color="primary" onClick={() => router.push('/')}>
        Return Home
      </Button>
    </div>
  );
};

export default ThankYouPage;
