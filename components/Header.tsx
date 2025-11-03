import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="w-full py-6 border-b border-border">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/images/logo.svg" alt="Logo" width={16} height={16} />
          <span className="text-xl font-medium">Raj</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#hero" className="hover:text-accent transition-colors">Home</Link>
          <Link href="#about" className="hover:text-accent transition-colors">About</Link>
          <Link href="#projects" className="hover:text-accent transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-accent transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <a 
            href="https://drive.google.com/file/d/1TXmL05weCwpqlakhc4GnZJHNKwWu3_0P/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:block px-4 py-2 rounded-md bg-foreground text-background hover:opacity-90 transition-colors"
          >
            Download CV
          </a>
          <div className="relative group">
            <button className="px-4 py-2 rounded-md border border-border hover:bg-input-bg transition-colors">
              EN
            </button>
            <div className="absolute right-0 mt-2 w-24 bg-card-bg border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <button className="block w-full text-left px-4 py-2 hover:bg-input-bg transition-colors">EN</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-input-bg transition-colors">FR</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-input-bg transition-colors">ES</button>
            </div>
          </div>
          <button 
            className="md:hidden" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[73px] left-0 right-0 bg-card-bg border-b border-border z-50">
          <div className="container py-4 flex flex-col space-y-4">
            <Link 
              href="#hero" 
              className="py-2 hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="#about" 
              className="py-2 hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#projects" 
              className="py-2 hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="#contact" 
              className="py-2 hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a 
              href="https://drive.google.com/file/d/1CNHZXmngGUH63TX-NMU4TAzfYooAJeM7/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="py-2 text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;