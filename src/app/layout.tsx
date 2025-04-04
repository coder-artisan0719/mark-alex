import Footer from '../components/Footer';
import '../styles/globals.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Sen } from 'next/font/google';

const Sen_font = Sen({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
});

export const metadata = {
  title: {
    template: '%s | Mark Alex',
    default: 'Mark Alex',
    description: 'Mark Alex, A Software Engineer',
    keywords: [
      'Next.js',
      'React',
      'JavaScript',
      'Frontend',
      'Developer',
      'Frontend Developer',
      'Backend Developer',
      'Fullstack Developer',
      'Frontend Role',
      'Hire Frontend developer',
      'Frontend Engineer',
      'Frontend Project',
      'Frontend App',
      'Insanustu',
      'Upperly',
      'TwelfthDream',
      'Harken',
    ],
    authors: [{ name: 'Mark Alex' }],
    creator: 'Mark Alex',
    publisher: 'Mark Alex',
    referrer: 'origin-when-cross-origin',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={Sen_font.className}>
        <div className={'w-full h-full relative'}>
          <div className={'m-h-screen'}>{children}</div>
          <div className={'bg-[#0e0e14] py-[8px] px-[15px]'}>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
