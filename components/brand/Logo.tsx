import icon from '@/public/icon/mstile-310x310.png';
import Image, { ImageProps } from 'next/image';

interface Props extends ImageProps {}

const Logo: React.FC<Props> = (props) => {
  return <Image {...props} src={icon} alt="brand" />;
};

export default Logo;
