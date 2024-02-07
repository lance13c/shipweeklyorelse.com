'use client';

import SubscriptionCard from '@/components/common/SubscriptionCard';
import { fadeAnimation } from '@/util/animations';
import { Button, Input } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { z } from 'zod';

interface Props {
  showDarkText?: boolean;
}

const emailSchema = z.string().email();

const CallToAction: React.FC<Props> = ({ showDarkText = false }) => {
  const [showInputField, setShowInputField] = useState(false);
  const [isVisible, setVisible] = useState(false);

  const [email, setEmail] = useState('');

  return (
    <div className="flex flex-col items-start w-full gap-4 min-h-fit">
      <Button
        color={'secondary'}
        isDisabled={showInputField}
        variant="solid"
        onClick={() => {
          setShowInputField(true);
          // @ts-expect-error - valid
          sa_event?.('click_call_to_action');
        }}
        title="Start the habit of shipping weekly today!"
      >
        Start the habit of shipping weekly, today!
      </Button>
      {showInputField && (
        <motion.div variants={fadeAnimation}>
          <Input
            label="Email"
            color="secondary"
            autoFocus={true}
            variant="bordered"
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailSchema.safeParse(e.target.value).success) {
                setVisible(true);
                // @ts-expect-error - valid
                sa_event?.('email_schema_valid');
              } else {
                setVisible(false);
              }
            }}
            type="email"
            className="font-medium min-w-[280px] md:min-w-[400px] w-[50%]"
            placeholder="Start shipping my projects this week!"
          />
        </motion.div>
      )}

      {isVisible ? <SubscriptionCard showDarkText={showDarkText} email={email} /> : null}
    </div>
  );
};

export default CallToAction;
