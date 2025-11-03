import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  projectUrl: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
}: ProjectCardProps) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card-bg transition-all hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      
      <div className="flex flex-col gap-3 p-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs rounded-md bg-input-bg"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Link 
          href={projectUrl} 
          className="mt-4 inline-flex items-center text-accent hover:underline"
        >
          View Project
          <svg 
            className="ml-1 h-4 w-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;