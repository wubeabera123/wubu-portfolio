import headerNavLinks from '@/data/headerNavLinks';
import { ReactNode } from 'react';
import Footer from './Footer';
import Link from './Link';
import MobileNav from './MobileNav';
import SectionContainer from './SectionContainer';
import ThemeSwitch from './ThemeSwitch';
import { RoughNotation } from 'react-rough-notation';
import { useRandomColorPair } from '@/lib/hooks/useRandomColorPair';

interface Props {
  children: ReactNode;
}

const LayoutWrapper = ({ children }: Props) => {
  const [resumeColor] = useRandomColorPair();

  return (
    <SectionContainer>
      <div className='flex h-screen flex-col justify-between'>
        <header className='flex items-center justify-between py-8'>
          <Link href='/'>
            <h1 className='text-2xl font-bold text-[#7df0ac]'>
              {' '}
              <span>&lt;waDigitalSolution /&gt;</span>
            </h1>{' '}
          </Link>
          {/* Use the Test component */}
          <div className='flex items-center text-base leading-5'>
            <div className='hidden sm:block'>
              {headerNavLinks.map(link => (
                <Link
                  key={link.title}
                  href={link.href}
                  className='p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4'
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
          <a
            className='hidden !font-normal !text-black !no-underline dark:!text-white sm:block'
            href={'/static/my_cv.pdf'}
            target='_blank'
            rel='noreferrer'
          >
            <RoughNotation
              show
              type='box'
              animationDelay={250}
              animationDuration={2000}
              strokeWidth={2}
              color={resumeColor}
            >
              Download Resume
            </RoughNotation>
          </a>
        </header>
        <main className='mb-auto'>{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
