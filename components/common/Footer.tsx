import { Link } from '@nextui-org/react';

interface Props {}

const Footer: React.FC<Props> = ({}) => {
  return (
    <footer className="h-20 md:pt-0 px-[8vw] text-white bg-gray-900 flex items-end justify-between relative bottom-0 w-full p-2 text-xs">
      <p className="bottom-0">© 2024 shipweeklyorelse.com brought to you by YoAmigo LLC all rights reserved</p>
      <div className="flex gap-2 place-self-end">
        <Link href="/terms" color="foreground" className="bottom-0 text-xs hover:underline">
          Terms of Service
        </Link>
        <Link href="/privacy" color="foreground" className="bottom-0 text-xs hover:underline">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
