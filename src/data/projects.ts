import Portfolio from "../assets/images/Portfolio.webp";
import CaseConverter from "../assets/images/Case-Converter.webp";
import News from "../assets/images/news.webp";
import Budgee from "../assets/images/Budgee.webp";
import { Project } from "../types/Types";

export const projectsData: Project[] = [
    {
        "id": "project_1",
        "title": "Portfolio Website",
        "description": "A modern, responsive portfolio website built with React and JavaScript. Features a clean design, smooth animations, and interactive components.",
        "image": Portfolio,
        "github": "https://github.com/404",
        "liveDemo": "https://push-react-port-template.netlify.app/",
        "techStack": [
            {
                "category": "Frontend",
                "items": [
                    "React",
                    "JavaScript",
                    "Tailwind CSS"
                ],
                "icon": "FiCode"
            },
            {
                "category": "Tools",
                "items": [
                    "Git",
                    "VS Code",
                    "Netlify"
                ],
                "icon": "FiLayers"
            }
        ]
    },
    {
        "id": "project_2",
        "title": "Case Converter",
        "description": "A user-friendly text case conversion tool that helps users transform text between different cases. Features include converting to uppercase, lowercase, sentence case, and alternating case, with additional utilities like removing extra spaces and text copying functionality.",
        "image": CaseConverter,
        "github": "https://github.com/404",
        "liveDemo": "https://push-case-converter.netlify.app/",
        "techStack": [
            {
                "category": "Frontend",
                "items": [
                    "React",
                    "Bootstrap",
                    "HTML5"
                ],
                "icon": "FiCode"
            },
            {
                "category": "UI/UX",
                "items": [
                    "Responsive Design",
                    "Dark Theme",
                    "User-friendly Interface"
                ],
                "icon": "FiLayout"
            },
            {
                "category": "Features",
                "items": [
                    "Text Case Conversion",
                    "Copy to Clipboard",
                    "Word Counter"
                ],
                "icon": "FiTool"
            }
        ]
    },
    {
        "id": "project_3",
        "title": "News Explorer",
        "description": "A dynamic news application that fetches real-time news data from NewsAPI. Users can browse news articles across different categories like technology, sports, entertainment, and business.",
        "image": News,
        "github": "https://github.com/shrivastavpush/news.com",
        "liveDemo": "https://news-dot-com.netlify.app",
        "techStack": [
            {
                "category": "Frontend",
                "items": [
                    "React",
                    "Bootstrap",
                    "Fetch API"
                ],
                "icon": "FiCode"
            },
            {
                "category": "UI/UX",
                "items": [
                    "Responsive Cards",
                    "Dynamic Loading"
                ],
                "icon": "FiLayout"
            },
            {
                "category": "Features",
                "items": [
                    "Real-time News",
                    "Category Filtering",
                    "Search Functionality"
                ],
                "icon": "FiTool"
            }
        ]
    },
    {
        "id": "project_4",
        "title": "Budgee - Expense Tracker",
        "description": "A comprehensive expense tracking application that helps users manage their finances effectively. Features include expense categorization, budget setting, and financial analytics.",
        "image": Budgee,
        "github": "https://github.com/shrivastavpush/budgee",
        "liveDemo": "https://budgeee.vercel.app/",
        "techStack": [
            {
                "category": "Frontend",
                "items": [
                    "React.js",
                    "Tailwind CSS",
                    "React Router",
                    "Recharts"
                ],
                "icon": "FiCode"
            },
            {
                "category": "Backend",
                "items": [
                    "Node.js",
                    "Express.js",
                    "MongoDB"
                ],
                "icon": "FiServer"
            },
            {
                "category": "State Management",
                "items": [
                    "Local Storage",
                    "Context API"
                ],
                "icon": "FiServer"
            },
            {
                "category": "Features",
                "items": [
                    "Expense Tracking",
                    "Budget Management",
                    "Data Visualization"
                ],
                "icon": "FiTool"
            }
        ]
    }
]; 