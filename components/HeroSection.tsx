import Image from 'next/image';
import Button from './Button';

const HeroSection = () => {
  return (
    <section id="hero" className="py-20 md:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Hi, I&apos;m Priyanshu.<br />
              Full Stack Developer
            </h1>
            
            <p className="text-lg text-gray-500 max-w-2xl">
              Developer by skill, creator by heart—Let&apos;s build something amazing!
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button href="#projects">View Projects</Button>
              <Button href="#contact" variant="secondary">Contact Me</Button>
            </div>
            
            <div className="flex gap-6 pt-6">
              <a href="https://github.com/unknown-lord/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Image src="/images/github.svg" alt="GitHub" width={24} height={24} />
              </a>
              <a href="https://www.linkedin.com/in/priyanshu-raj01/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Image src="/images/linkedin.svg" alt="LinkedIn" width={24} height={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Image src="/images/twitter.svg" alt="Twitter" width={24} height={24} />
              </a>
              <a href="mailto:priyanshu.intern24@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Image src="/images/email.svg" alt="Email" width={24} height={24} />
              </a>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden rounded-full border-4 border-border">
              <Image 
                src="/images/dp.jpeg" 
                alt="Priyanshu's Profile" 
                width={400}
                height={400}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;