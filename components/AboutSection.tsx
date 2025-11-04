import Image from 'next/image';

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
  'Express', 'MongoDB', 'MySQL', 'GraphQL', 'Tailwind CSS',
  'Python', 'C++', 'Java', 'AWS', 'Git', 'Blender', 'Replit', 'Figma'
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card-bg">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            
            <div className="space-y-4">
              <p>
                I&apos;m a web developer with over 1+ years of experience building web applications and digital products. I specialize in creating responsive, accessible, and performant web experiences using modern technologies.
              </p>
              
              <p>
                My journey in web development began when I built my first web game at 17. Since then, I&apos;ve worked with startups, freelanced, and collaborated with diverse teams to deliver high-quality, real-world solutions. I was also among the Top 20 selected teams from my college for SIH. Beyond coding, I have a strong graphic design background, having created 1000+ designs and logos for brands, conferences, and startups.
              </p>
              
              <p>
                When I&apos;m not coding, you can find me exploring new technologies, creating videos, designing graphics, and capturing nature through photography.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">My Skills</h3>
              
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-background border border-border rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden rounded-lg border border-border">
              {/* Map image background */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src="/images/delhi-map.png" 
                  alt="Delhi Map" 
                  fill 
                  className="object-cover opacity-20" 
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 z-10" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="flex flex-col items-center gap-4">
                  <Image src="/images/landmark.svg" alt="Location" width={40} height={40} />
                  <div className="text-center">
                    <p className="text-lg font-medium">Based in</p>
                    <p className="text-2xl font-bold">New Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;