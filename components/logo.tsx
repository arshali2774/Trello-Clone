import Image from 'next/image';
import Link from 'next/link';
import local from 'next/font/local';
import { cn } from '@/lib/utils';

const headingFont = local({
  src: '../app/fonts/CalSans-SemiBold.woff2',
});

const Logo = () => {
  return (
    <Link href='/'>
      <div className='hover:opacity-75 transition items-center gap-x-2 hidden md:flex'>
        <Image src='/logo.svg' alt='logo' width={30} height={30} />
        <p
          className={cn('text-lg text-neutral-700 pb-1', headingFont.className)}
        >
          TaskAid
        </p>
      </div>
    </Link>
  );
};
export default Logo;
