'use client';

import Logo from '@/components/brand/Logo';
import CallToAction from '@/components/common/CallToAction';
import { motion } from 'framer-motion';
import Ztext from 'react-ztext';

const HomePage = () => {
  return (
    <>
      <main className="flex w-full min-h-[100vh] dark text-foreground bg-gray-900 py-10 2xl:py-32 px-[8vw]">
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
            Scared to ship your business projects publicly?
          </h1>
          <h2 className="mb-4 text-xl lg:text-2xl font-medium">so are we.</h2>
          <div className="flex w-full flex-wrap-reverse justify-between">
            <div className="flex flex-col">
              <div className="flex flex-col flex-nowrap justify-between">
                <p className="text-lg mb-10 mt-4">
                  The{' '}
                  <span className="relative w-fit">
                    discord community
                    <div className="absolute animate-gradient right-0 rounded h-[2px] w-full from-secondary-800 to-secondary-400 bg-gradient-to-tr" />
                  </span>{' '}
                  that ships business projects weekly.
                </p>
                <ul className="text flex-col space-y-3 mb-10">
                  <li className="ml-4  list-disc">Build the habit of shipping projects weekly.</li>
                  <li className="ml-4  list-disc">Network and be held accountable by impressive people!</li>
                  <li className="ml-4  list-disc">Enjoy the incentives and consequences...😮</li>
                </ul>
              </div>
              <CallToAction />
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
                eventRotation="10deg"
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
          <div className="mt-20">
            <p className="relative text-sm max-w-lg">
              This is a community for the striving entrepreneurs who want to build discipline, get over the fear of
              shipping half-baked projects, and learn to grow fast with other like minded peers.
            </p>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default HomePage;
