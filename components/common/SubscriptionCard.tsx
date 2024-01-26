'use client';

import { assertIsDefined } from '@/app/lib/assertions';
import clientHTTP from '@/app/lib/client/util/clientHTTP';
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
          assertIsDefined(priceId, 'price id');

          setIsSaving(true);

          const { redirectUrl } = await clientHTTP.post('/api/waitlist', {
            body: JSON.stringify({
              priceId: priceId,
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
    <div className={`relative p-8 ${isDark ? 'bg-gray-800' : 'bg-white'} max-w-sm shadow-md rounded-lg`}>
      {/* {hasFreeTrial && (
        <div className="absolute top-0 left-0 right-0 flex justify-center items-center h-8 bg-blue-500 rounded-t-lg">
          <p className="text-white font-bold">14 Day Free Trial</p>
        </div>
      )} */}
      <div className="flex flex-col items-center space-y-2">
        <p className={`text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</p>
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
        <button
          data-price-id="price_1OcdrJKD3CXWHKgZn2rja245"
          onClick={(e) => createStripeCheckout.call(e)}
          className={`mt-4 px-6 py-2 ${
            isSaving ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'
          } text-white font-bold rounded focus:outline-none focus:shadow-outline`}
          disabled={isSaving}
        >
          Join Now
        </button>
      </div>
    </div>
  );
};

export default SubscriptionCard;
