export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  techStack: string[];
  demoLink: string;
  githubLink: string;
}

export const projectData: Project[] = [
  {
    id: 1,
    title: "Gym Management System",
    description: "A comprehensive gym management solution for tracking memberships, scheduling classes, and managing trainers. The system includes user authentication, payment processing, and reporting features.",
    image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: ["Web App", "Frontend", "Backend"],
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 2,
    title: "Jhandi Burja - Nepali Dice Game",
    description: "Digital version of the traditional Nepali dice game, featuring authentic rules and multiplayer capabilities. The game includes real-time player interaction, leaderboards, and customizable game settings.",
    image: "https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: ["Game", "Frontend"],
    techStack: ["HTML", "CSS", "JavaScript"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 3,
    title: "Disaster Management & Alert App",
    description: "Real-time disaster management application for Nepal, providing alerts and emergency resources during natural disasters. Features include location-based warnings, evacuation routes, and emergency contact information.",
    image: "https://images.pexels.com/photos/4050399/pexels-photo-4050399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: ["Mobile App", "Frontend", "Backend"],
    techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Firebase"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 4,
    title: "Aviator Game Clone",
    description: "A clone of the popular Aviator crash betting game with realistic physics and animations. The game includes multiple betting options, realistic crash mechanics, and a responsive design for various devices.",
    image: "https://images.pexels.com/photos/46148/aircraft-jet-landing-reach-46148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: ["Game", "Frontend"],
    techStack: ["HTML", "CSS", "JavaScript"],
    demoLink: "#",
    githubLink: "#"
  }
];