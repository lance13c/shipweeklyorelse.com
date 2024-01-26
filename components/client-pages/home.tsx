'use client';

import Logo from '@/components/brand/Logo';
import SubscriptionCard from '@/components/common/SubscriptionCard';
import { Input } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { z } from 'zod';

const emailSchema = z.string().email();

const HomePage = () => {
  const [isVisible, setVisible] = useState(false);
  const [step, setStep] = useState(0); // 0: email, 1: credit card, 2: welcome message

  const [email, setEmail] = useState('');

  const handleSubmitEmail = () => {
    setStep(1); // Move to credit card input
  };

  const handleCreditCardSubmit = () => {
    setStep(2); // Show welcome message
    setTimeout(() => {
      // setVisible(false); // Close modal after showing the message
      setStep(0); // Reset form for the next use
    }, 3000); // Display welcome message for 3 seconds
  };

  return (
    <main className="flex w-full h-[800px] dark text-foreground bg-gray-900 py-10 px-[8vw]">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1 color="white" className="mb-2 text-5xl">
          Scared to ship your products publicly?
        </h1>
        <h2 className="mb-4 text-2xl font-medium">so are we.</h2>
        <div className="flex flex-nowrap justify-between">
          <p className="text-lg mb-10">A community that ships side projects weekly.</p>
          <ul className="text flex-col space-y-3 mb-10">
            <li className="ml-4  list-disc">Weekly project commitments</li>
            <li className="ml-4  list-disc">$5/month</li>
            <li className="ml-4  list-disc">All subscriptions split for launchers.</li>
          </ul>
          <motion.div
            className="relative"
            initial={{
              opacity: 0.5,
              scale: '0.75',
              shadow: '0px 0px 0px 0px rgba(0, 0, 0, 0)',
            }}
            animate={{
              opacity: 1,
              rotateX: '10deg',
              rotateY: '20deg',
              scale: '0.75',
            }}
            transition={{
              delay: 0.2,
              duration: 1,
            }}
          >
            <motion.div
              className="absolute border-purple-700/70 border-4 w-full h-full"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                translateX: '100px',
                translateY: '-50px',
              }}
              transition={{
                delay: 0.5,
                duration: 1,
              }}
            />
            <motion.div
              className="absolute border-purple-700/50 border-4 w-full h-full"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                translateX: '100px',
                translateY: '-50px',
                scale: 1.1,
              }}
              transition={{
                delay: 1,
                duration: 1,
              }}
            />
            <motion.div
              className="absolute border-purple-700/30 border-4 w-full h-full"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                translateX: '100px',
                translateY: '-50px',
                scale: 1.2,
              }}
              transition={{
                delay: 1.5,
                duration: 1,
              }}
            />

            <Logo
              style={{
                boxShadow:
                  '2px -1px 0px 0px rgba(251, 240, 221, 0.8), 4px -1px 0px 0px rgba(251, 240, 221, 0.8), 6px -1px 0px 0px rgba(251, 240, 221, 0.8), 8px -1px 0px 0px rgba(251, 240, 221, 0.8)',
              }}
              className="translate-x-16"
            />
          </motion.div>
        </div>

        <div className="flex w-[50%] h-full">
          <Input
            color="secondary"
            variant="bordered"
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailSchema.safeParse(e.target.value).success) {
                setVisible(true);
              } else {
                setVisible(false);
              }
            }}
            type="email"
            className="font-medium"
            placeholder="Welcome to the grind, email please"
          />
          <SubscriptionCard priceId={''} amount={0} subscriptionPeriod={'monthly'} />
        </div>

        {isVisible ? (
          <motion.section
            initial={{
              opacity: 0,
              rotateX: '30deg',
            }}
            animate={{
              opacity: 1,
              rotateX: '0deg',
            }}
            transition={{
              duration: 0.4,
            }}
          >
            <div className="h-10 w-20 bg-green">Card Info</div>
          </motion.section>
        ) : null}
      </motion.div>
    </main>
  );
};

export default HomePage;
