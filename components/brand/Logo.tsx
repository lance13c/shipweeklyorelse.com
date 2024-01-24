import icon from '@/public/icon/mstile-310x310.png';
import Image from 'next/image';
import { CSSProperties } from 'react';

interface Props {
  style: CSSProperties;
  className: string;
}

const Logo: React.FC<Props> = (props) => {
  return <Image {...props} src={icon} alt="brand" />;
};

export default Logo;
