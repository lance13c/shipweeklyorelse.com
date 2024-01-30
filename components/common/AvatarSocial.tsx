'use client';

import { fadeAnimation } from '@/util/animations';
import { Button, Image } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FaGithubAlt, FaLink, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

interface Props {
  name: string;
  description: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter?: string;
    website?: string;
  };
  image: string;
  video: string;
}

const LinkedInAvatar: React.FC<Props> = ({ name, description, socialLinks, image, video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="flex flex-col gap-4 max-w-fit">
      <div className="flex flex-col sm:flex-row gap-8">
        <div className="flex-1 relative w-fit h-fit">
          <Image className="min-w-[60px]" src={image} alt={name} width={200} height={200} isZoomed />
          <motion.div
            style={{
              borderRadius: '1rem',
              overflow: 'hidden',
            }}
            className="absolute top-0 z-10 w-full h-full"
            variants={fadeAnimation}
            initial="initial"
            whileHover="animate"
            onHoverStart={() => {
              if (videoRef?.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play();
              }
            }}
            onHoverEnd={() => {
              if (videoRef?.current) {
                videoRef.current.pause();
              }
            }}
            exit="exit"
          >
            <video ref={videoRef} src={video} loop muted />
          </motion.div>
        </div>
        <div className="flex w-full flex-col max-w-[80%] sm:max-w-52">
          <p className="text-lg font-medium">{name}</p>
          <p className="text-md">{description}</p>
        </div>
      </div>
      <div className="flex place-self-start sm:place-self-end items-end gap-2">
        <Button as="a" isIconOnly href={socialLinks.github} target="_about" title="Github">
          <FaGithubAlt size={18} />
        </Button>
        <Button as="a" isIconOnly href={socialLinks.linkedin} target="_about" title="LinkedIn">
          <FaLinkedinIn size={18} />
        </Button>
        {socialLinks.website && (
          <Button as="a" isIconOnly target="_about" href={socialLinks.website}>
            <FaLink size={18} />
          </Button>
        )}
        {socialLinks.twitter && (
          <Button as="a" isIconOnly target="_about" href={socialLinks.twitter}>
            <FaTwitter size={18} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default LinkedInAvatar;
