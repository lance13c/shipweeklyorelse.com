import Logo from '@/components/brand/Logo';
import LinkedInAvatar from '@/components/common/AvatarSocial';
import Link from 'next/link';

interface Props {}

const AboutPage: React.FC<Props> = ({}) => {
  return (
    <main className="w-full text-black min-h-[100vh] bg-gradient-to-tr bg-orange-50 px-[7vw]">
      <div className="flex flex-col items-start p-4 pt-10 gap-8 w-full sm:w-[80%] md:w-[60%]">
        <div>
          <h1 className="text-sm uppercase font-medium mb-1">The Story</h1>
          <h2 className="text-3xl">
            I wanted a crew who&apos;d push me to launch my business projects{' '}
            <span
              style={{
                lineHeight: '3rem',
              }}
              className="p-1 bg-orange-200 rounded-md"
            >
              every week.
            </span>
          </h2>
        </div>
        <span className="text-xl">
          Putting them in front of the world,{' '}
          <span className="p-1 bg-blue-200 rounded-md">not just in my Github repository 🙃🙈</span>. I told my
          entrepreneurial best friend this, not asking him for anything, he says:
        </span>

        <p className="flex justify-center items-center relative text-xl font-semibold border-orange-300 border-4 p-4 rounded-md">
          <span className="relative text-5xl -top-[0.5rem] text-orange-300">&ldquo;</span>
          <span className="px-2">Count me in</span>
          <span className="relative text-5xl top-8 text-orange-300">&rdquo;</span>
        </p>
        <p className="text-xl">I ask my other ambitious dev friend...</p>
        <p className="flex justify-center items-center relative text-xl font-semibold border-blue-300 border-4 p-4 rounded-md">
          <span className="relative text-5xl -top-[0.5rem] text-blue-300">&ldquo;</span>
          <span className="px-2">I&apos;m 100% in</span>
          <span className="relative text-5xl top-8 text-blue-300">&rdquo;</span>
        </p>
      </div>
      <div className="mt-10 min-h-[1400px] pb-12">
        <h2 className="text-sm uppercase font-medium mb-4">Founding Crew</h2>
        <div className="flex flex-col gap-12">
          <div>
            <LinkedInAvatar
              description="A dev who dances, addicted to cereal, 7 year professional web dev who has been scared of posting things in public for too long, hence shipweeklyorelse.com 🙂"
              name="Dom"
              socialLinks={{
                github: 'https://github.com/lance13c',
                linkedin: 'https://www.linkedin.com/in/dominic-cicilio-96461786/',
                twitter: '',
              }}
              image={'/assets/avatars/dom.jpeg'}
              video={'/assets/avatars/dom.mp4'}
            />
          </div>
          <div>
            <LinkedInAvatar
              description="Jokester and self-taught dev who ran his own consulting firm for 5 years – He'll out code you 🎤🫳"
              name="Joe"
              socialLinks={{
                github: 'https://github.com/JoeRoddy',
                linkedin: 'https://www.linkedin.com/in/joe-roddy-78722865/',
                twitter: '',
              }}
              image={'/assets/avatars/joe.jpeg'}
              video={'/assets/avatars/joe.mp4'}
            />
          </div>
          <div>
            <LinkedInAvatar
              description="5x serial entrepreneur (they all died 😭). Motivation central, self-taught dev, eats code and business books for breakfast, lunch and dinner."
              name="Jose"
              socialLinks={{
                github: 'https://github.com/superjose?tab=repositories',
                linkedin: 'https://www.linkedin.com/in/javiasilis/',
                website: 'https://www.javiasilis.com/',
                twitter: '',
              }}
              image={'/assets/avatars/jose.jpeg'}
              video={'/assets/avatars/jose.mp4'}
            />
          </div>
        </div>
        <div className="flex flex-col w-full text-center justify-center items-center mt-28 text-xl font-medium gap-12">
          <span className="w-full sm:w-[75%] max-w-2xl">
            Ship business projects weekly. Be held accountable by peers. Share our learnings.
          </span>
          <Link href="/">
            <Logo
              style={{
                width: '140px',
              }}
              className={'border-gray-600 border-2'}
            />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
