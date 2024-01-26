'use client';

import { assertIsDefined } from '@/app/lib/assertions';
import clientHTTP from '@/app/lib/client/util/clientHTTP';
import { Button, Card, CardFooter, CardHeader, Chip, Divider, Tab, Tabs } from '@nextui-org/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React, { useMemo, useState } from 'react';
import { debounce } from 'remeda';

const SUBSCRIPTION_PERIODS = {
  monthly: 'Monthly',
  quarterly: 'Quarterly',
  annual: 'Annual',
  lifetime: 'Lifetime',
};

const animateLeftVariant = {
  initial: {
    opacity: 0,
    x: -10,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      opacity: {
        duration: 0.5,
      },
    },
  },
  exit: {
    opacity: 0,
  },
};

const animateRightVariant = {
  initial: {
    opacity: 0,
    x: 10,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      opacity: {
        duration: 0.5,
      },
    },
  },
  exit: {
    opacity: 0,
  },
};

interface SubscriptionCardProps {
  priceId: string;
  discountId?: string;
  amount: number;
  discountAmount?: number;
  title?: string;
  description?: string;
  subscriptionPeriod: 'monthly' | 'annual';
  forAmbassador?: boolean;
  isDark?: boolean;
  usernameToRequest?: string;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  priceId,
  discountId,
  amount,
  title = 'Membership',
  subscriptionPeriod = 'monthly',
  description = '',
  forAmbassador = false,
  discountAmount,
  isDark = false,
  usernameToRequest = '',
}) => {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);

  const createStripeCheckout = useMemo(
    () =>
      debounce(async (e: React.MouseEventHandler<HTMLButtonElement>) => {
        if (router) {
          // @ts-ignore
          const priceId = e?.target?.getAttribute('data-price-id');
          // @ts-ignore

          const priceType = e?.target?.getAttribute('data-price-type');
          assertIsDefined(priceId, 'price id');
          assertIsDefined(priceType, 'price type');

          setIsSaving(true);

          const { redirectUrl } = await clientHTTP.post('/api/waitlist', {
            body: JSON.stringify({
              priceId,
              priceType,
              discountId: discountId,
              usernameToRequest: usernameToRequest,
            }),
          });
          console.log('redirect url', redirectUrl);
          assertIsDefined(redirectUrl, 'url');

          setIsSaving(false);
          router.push(redirectUrl);
        }
      }, {}),
    [],
  );

  return (
    <div className={`relative h-20 max-w-sm w-full shadow-md rounded-lg`}>
      <div className="p-4 mb-4 w-full bg-primary-500/20 border-primary-500/30 text-primary-700 border rounded-md text-xs">
        60 Day Money Back Guarantee
      </div>
      <div className="flex flex-col items-center space-y-2">
        <p className={`text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</p>
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
      </div>
      {/* <div className="p-4 mb-4 w-[500px] bg-primary-500/20 border-primary-500/30 text-primary-700 border rounded-md text-xs"> */}
      {/* Price Increase To $14.99 starting March 1st
      </div> */}
      <AnimatePresence mode="wait">
        <Tabs className="relative" aria-label="Options">
          <Tab key="monthly" title="Monthly">
            <Card key={'price-monthly'} as={motion.div} className="max-w-[400px]">
              <motion.div variants={animateRightVariant} initial="initial" animate="animate" exit="exit">
                <CardHeader className="flex gap-3 justify-between">
                  <div className="flex flex-col">
                    <p className="text-md">Monthly Membership</p>
                    <div className="flex items-baseline">
                      <span className="text-sm font-medium">$</span>
                      <span className="text-xl font-bold">9</span>
                      <span className="text-md font-medium">.99</span>
                      <span>/month</span>
                    </div>
                  </div>
                </CardHeader>
                <Divider />
                <CardFooter>
                  <Button
                    data-price-id="price_1OcdrJKD3CXWHKgZn2rja245"
                    data-price-type="monthly"
                    className="w-full"
                    color="secondary"
                    variant="solid"
                    onClick={(e) => createStripeCheckout.call(e)}
                  >
                    <span className="pr-1 text-md">Join</span>
                  </Button>
                </CardFooter>
              </motion.div>
            </Card>
          </Tab>
          <Tab
            className="relative"
            key="annual"
            title={
              <div>
                <span className="pr-2">Annual</span>
                <Chip
                  variant="shadow"
                  classNames={{
                    base: 'text-xs bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30',
                    content: 'drop-shadow shadow-black text-white',
                  }}
                >
                  5 Months Off
                </Chip>
              </div>
            }
          >
            <Card key={'price-annual'} className="max-w-[400px]">
              <motion.div variants={animateLeftVariant} initial="initial" animate="animate" exit="exit">
                <CardHeader className="flex items-start flex-col gap-3">
                  <div className="flex flex-col">
                    <p className="text-md">Annual Membership</p>
                  </div>
                  <div className="flex items-baseline space-x-2">
                    <div className="relative flex items-baseline">
                      <div className="top-[50%] absolute w-full rotate-12 h-[1px] pb-1 bg-orange-500/80"></div>
                      <span className="text-sm font-medium ">$</span>
                      <span className="text-2xl font-bold ">120</span>
                      <span className="text-md font-medium ">.00</span>
                    </div>
                    <div className="flex items-baseline gradient-text w-full">
                      <span className="text-sm font-medium">$</span>
                      <span className="text-2xl font-bold">70</span>
                      <span className="text-md font-medium">.00</span>
                      <span>/ year</span>
                    </div>
                  </div>
                </CardHeader>
                <Divider />

                <CardFooter>
                  <Button
                    className="w-full"
                    data-price-id="price_1OcdrJKD3CXWHKgZn2rja245"
                    data-price-type="annual"
                    discount-id=""
                    color="secondary"
                    variant="solid"
                    onClick={(e) => createStripeCheckout.call(e)}
                  >
                    Join
                  </Button>
                </CardFooter>
              </motion.div>
            </Card>
          </Tab>
        </Tabs>
      </AnimatePresence>
    </div>
  );
};

export default SubscriptionCard;
