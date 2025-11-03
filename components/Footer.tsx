import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.svg" alt="Logo" width={16} height={16} />
            <span className="text-xl font-medium">Raj</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="https://github.com/unknown-lord/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Image src="/images/github.svg" alt="GitHub" width={20} height={20} />
            </Link>
            <Link href="#" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Image src="/images/twitter.svg" alt="Twitter" width={20} height={20} />
            </Link>
            <Link href="https://www.linkedin.com/in/priyanshu-raj01/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Image src="/images/linkedin.svg" alt="LinkedIn" width={20} height={20} />
            </Link>
            <Link href="#" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Image src="/images/discord.svg" alt="Discord" width={20} height={20} />
            </Link>
            <Link href="#" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Image src="/images/telegram.svg" alt="Telegram" width={20} height={20} />
            </Link>
            <Link href="#" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Image src="/images/email.svg" alt="Email" width={20} height={20} />
            </Link>
            <Link href="#" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Image src="/images/figma.svg" alt="Figma" width={20} height={20} />
            </Link>
            <Link href="#" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Image src="/images/dribble.svg" alt="Dribble" width={20} height={20} />
            </Link>
          </div>
          
          <div className="text-sm text-gray-500">
            © 2025 Priyanshu Raj. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;