'use client';

import { assertIsDefined } from '@/app/lib/assertions';
import clientEnvs from '@/app/lib/client/util/clientEnvs';
import clientHTTP from '@/app/lib/client/util/clientHTTP';
import { animateLeftVariant, animateRightVariant, fadeAnimation } from '@/util/animations';
import { Button, Card, CardFooter, CardHeader, Checkbox, Chip, Divider, Link, Tab, Tabs } from '@nextui-org/react';
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

interface SubscriptionCardProps {
  email: string;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ email }) => {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const createStripeAnnuallyCheckout = useMemo(
    () =>
      debounce(async (e: React.MouseEventHandler<HTMLButtonElement>) => {
        if (router) {
          setIsSaving(true);

          const { redirectUrl } = await clientHTTP.post('/api/waitlist', {
            body: JSON.stringify({
              priceId: clientEnvs.NEXT_PUBLIC_ANNUAL_PRICE_ID,
              discountId: clientEnvs.NEXT_PUBLIC_ANNUAL_DISCOUNT_ID,
              email,
            }),
          });
          console.log('redirect url', redirectUrl);
          assertIsDefined(redirectUrl, 'url');

          setIsSaving(false);
          router.push(redirectUrl);
        }
      }, {}),
    [email, router],
  );

  const createStripeMonthlyCheckout = useMemo(
    () =>
      debounce(async (e: React.MouseEventHandler<HTMLButtonElement>) => {
        if (router) {
          setIsSaving(true);

          const { redirectUrl } = await clientHTTP.post('/api/waitlist', {
            body: JSON.stringify({
              priceId: clientEnvs.NEXT_PUBLIC_MONTHLY_PRICE_ID,
              email,
            }),
          });
          console.log('redirect url', redirectUrl);
          assertIsDefined(redirectUrl, 'url');

          setIsSaving(false);
          router.push(redirectUrl);
        }
      }, {}),
    [email, router],
  );

  return (
    <motion.div
      variants={fadeAnimation}
      initial="initial"
      animate="animate"
      className={`relative h-20 max-w-sm w-full shadow-md rounded-lg`}
    >
      <div className="p-4 mb-4 w-full bg-primary-500/20 border-primary-500/30 text-primary-700 border rounded-md text-xs">
        60 Day Money Back Guarantee
      </div>

      {/* <div className="p-4 mb-4 w-[500px] bg-primary-500/20 border-primary-500/30 text-primary-700 border rounded-md text-xs"> */}
      {/* Price Increase To $14.99 starting March 1st
      </div> */}
      <AnimatePresence mode="wait">
        <Tabs
          className="relative"
          aria-label="Options"
          onSelectionChange={() => {
            setIsChecked(false);
          }}
        >
          <Tab key="monthly" title="Monthly">
            <Card key={'price-monthly'} as={motion.div} className="min-w-[280px] max-w-[400px]">
              <motion.div variants={animateRightVariant} initial="initial" animate="animate" exit="exit">
                <CardHeader className="flex gap-3 justify-between">
                  <div className="flex flex-col">
                    <p className="text-md">Monthly Membership</p>
                    <div className="flex items-baseline">
                      <span className="text-sm font-medium">$</span>
                      <span className="text-xl font-bold">10</span>
                      <span className="text-md font-medium">.00</span>
                      <span>/month</span>
                    </div>
                  </div>
                </CardHeader>
                <Divider />
                <CardFooter className="flex flex-col gap-3 items-start">
                  <Checkbox
                    className="text-xs"
                    onChange={(e) => {
                      setIsChecked(e.target.checked);
                    }}
                  >
                    <span className="text-xs">
                      You have read and agree to our{' '}
                      <Link className="text-xs" href="/terms">
                        terms of service
                      </Link>{' '}
                      and{' '}
                      <Link className="text-xs" href="/privacy">
                        privacy policy
                      </Link>
                      .
                    </span>
                  </Checkbox>
                  <Button
                    disabled={!isChecked}
                    className={`${!isChecked ? 'cursor-not-allowed' : ''} w-full`}
                    color={isChecked ? 'secondary' : 'default'}
                    variant="solid"
                    // @ts-expect-error - valid
                    onClick={(e) => createStripeMonthlyCheckout.call(e)}
                  >
                    <span className="pr-1 text-md">Join Today</span>
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
            <Card key={'price-annual'} className="min-w-[280px] max-w-[400px]">
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

                <CardFooter className="flex flex-col gap-3 items-start">
                  <Checkbox
                    className="text-xs"
                    onChange={(e) => {
                      console.log(e.target.checked);
                      setIsChecked(e.target.checked);
                    }}
                  >
                    <span className="text-xs">
                      You have read and agree to our{' '}
                      <Link className="text-xs" href="/terms">
                        terms of service
                      </Link>{' '}
                      and{' '}
                      <Link className="text-xs" href="/privacy">
                        privacy policy
                      </Link>
                      .
                    </span>
                  </Checkbox>
                  <Button
                    disabled={!isChecked}
                    className={`${!isChecked ? 'cursor-not-allowed' : ''} w-full`}
                    color={isChecked ? 'secondary' : 'default'}
                    variant="solid"
                    isLoading={isSaving}
                    // @ts-expect-error - valid
                    onClick={(e) => createStripeAnnuallyCheckout.call(e)}
                  >
                    Join Today
                  </Button>
                </CardFooter>
              </motion.div>
            </Card>
          </Tab>
        </Tabs>
      </AnimatePresence>
    </motion.div>
  );
};

export default SubscriptionCard;
