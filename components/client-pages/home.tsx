'use client';

import Logo from '@/components/brand/Logo';
import SubscriptionCard from '@/components/common/SubscriptionCard';
import { Input } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Ztext from 'react-ztext';
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
    <>
      <main className="flex w-full min-h-[1000px] dark text-foreground bg-gray-900 py-10 px-[8vw]">
        <motion.div
          className="flex-1 h-full w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1
            style={{
              lineHeight: '3.3rem',
            }}
            color="white"
            className="mt-4 mb-2 text-4xl lg:text-5xl max-w-[800px]"
          >
            Scared to ship your software products publicly?
          </h1>
          <h2 className="mb-4 text-xl lg:text-2xl font-medium">so are we.</h2>
          <div className="flex w-full flex-wrap-reverse justify-between">
            <div className="flex flex-col">
              <div className="flex flex-col flex-nowrap justify-between">
                <p className="text-lg mb-10  mt-4">
                  The{' '}
                  <span className="relative w-fit">
                    discord community
                    <div className="absolute right-0 rounded h-[2px] w-full from-secondary-800 to-secondary-400 bg-gradient-to-tr" />
                  </span>{' '}
                  that ships side projects weekly.
                </p>
                <ul className="text flex-col space-y-3 mb-10">
                  <li className="ml-4  list-disc">Build the habit of shipping projects weekly.</li>
                  <li className="ml-4  list-disc">Network and be held accountable by impressive people!</li>
                  <li className="ml-4  list-disc">Enjoy the incentives and consequences...😮</li>
                </ul>
              </div>
              <div className="flex flex-col items-start w-[50%] h-full gap-4">
                <Input
                  color="secondary"
                  variant="bordered"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailSchema.safeParse(e.target.value).success) {
                      setVisible(true);
                      console.log('true');
                    } else {
                      setVisible(false);
                    }
                  }}
                  type="email"
                  className="font-medium w-full min-w-[400px]"
                  placeholder="Welcome to the grind, email please"
                />

                {isVisible ? <SubscriptionCard email={email} /> : null}
              </div>
            </div>

            <div
              className="py-8 lg:translate-y-[-50px]"
              style={{
                filter: 'drop-shadow(0 0 1rem rgba(246, 194, 91, 0.391))',
              }}
            >
              <Ztext
                depth="1rem"
                direction="both"
                event="pointer"
                eventRotation="40deg"
                eventDirection="default"
                fade={false}
                layers={20}
                perspective="500px"
              >
                <span>
                  <Logo
                    style={{
                      boxShadow: '0 0 0.1rem rgba(246, 194, 91)',
                    }}
                    className="lg:max-w-[400px] max-h-[400px] max-w-[200px]"
                  />
                </span>
              </Ztext>
            </div>
          </div>
        </motion.div>
      </main>
      <footer className="px-[8vw] text-white bg-gray-900 flex-1 flex items-end relative bottom-0 w-full p-2 text-xs">
        <span className="bottom-0">© 2024 shipweeklyorelse.com brought to you by YoAmigo LLC all rights reserved</span>
      </footer>
    </>
  );
};

export default HomePage;
