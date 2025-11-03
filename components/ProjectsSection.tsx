import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A fully functional e-commerce platform with payment integration and admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80',
    projectUrl: '#',
  },
  {
    id: 2,
    title: 'IDSS for Climate Adaptation',
    description: 'A platform engineered as an Intelligent Decision Support System (IDSS) using Flask, Pandas, NumPy, and Scikit-learn, built to empower farmers with data-driven strategies for climate change. It delivers predictive modeling for crop diversification and optimal resource management, integrating real-time data analysis to support proactive risk mitigation and promote sustainable agriculture.',
    tags: ['Flask', 'Pandas', 'NumPy', 'Scikit-learn'],
    imageUrl: '/images/agriculture-tech.svg', // Updated with new agriculture technology SVG image
    projectUrl: '#',
  },
  {
    id: 3,
    title: 'Fitness Tracker',
    description: 'A mobile application for tracking workouts, nutrition, and health metrics.',
    tags: ['React Native', 'GraphQL', 'TypeScript'],
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    projectUrl: '#',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'A weather forecasting application with interactive maps and detailed analytics.',
    tags: ['JavaScript', 'API Integration', 'Chart.js'],
    imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    projectUrl: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project represents a unique challenge and solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center text-accent hover:underline"
          >
            View All Projects
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;