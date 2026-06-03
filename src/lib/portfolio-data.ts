import chatbot from "@/assets/project-chatbot.jpg";
import calculator from "@/assets/project-calculator.jpg";
import todo from "@/assets/project-todo.jpg";

export const PROFILE = {
  name: "Abhilash Reddy",
  shortName: "Abhilash",
  role: "Computer Science Student",
  tagline: "Aspiring Web Developer",
  intro:
    "I am a Computer Science student passionate about web development and modern technologies. I enjoy building responsive and interactive web applications while continuously improving my development skills and learning new technologies.",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  email: "abhilash@example.com",
  resumeUrl: "#",
};

export const SKILLS = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 88 },
  { name: "JavaScript", level: 82 },
  { name: "React", level: 80 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Git", level: 78 },
  { name: "GitHub", level: 80 },
  { name: "Vite", level: 75 },
  { name: "ESLint", level: 70 },
];

export const PROJECTS = [
  {
    title: "Chatbot",
    description:
      "Interactive chatbot with a responsive chat interface built using React and JavaScript.",
    image: chatbot,
    tags: ["React", "JavaScript", "CSS"],
    live: "#",
    repo: "#",
  },
  {
    title: "Calculator App",
    description:
      "Modern calculator handling arithmetic operations with a clean, minimal UI built in React.",
    image: calculator,
    tags: ["React", "JavaScript", "CSS"],
    live: "#",
    repo: "#",
  },
  {
    title: "Todo App",
    description:
      "Task manager to add, edit, delete and complete tasks with a fully responsive interface.",
    image: todo,
    tags: ["React", "JavaScript", "Tailwind"],
    live: "#",
    repo: "#",
  },
];

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
