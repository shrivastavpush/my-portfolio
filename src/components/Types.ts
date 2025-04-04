import { ReactElement, ReactNode } from "react";
import { IconType } from "react-icons";

//route definition
export interface RouteDefinition {
    index?: boolean;
    path?: string;
    element: ReactNode;
}

//nav link entry
export interface NavLinkEntry {
    to: string;
    label: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

//about
export interface Skill {
    category: string;
    icon: ReactElement<IconType>;
    items: string[];
    description: string;
}

//education
export interface EducationDetails {
    degree: string;
    school: string;
    year: string;
    description: string;
    achievements?: string[];
}

//experience
export interface ExperienceDescription {
    id: number;
    desc: string;
}

export interface ExperienceDetails {
    role: string;
    company: string;
    period: string;
    location: string;
    description: ExperienceDescription[];
    skills?: string[];
    highlights?: string[];
}

//interests
export interface InterestDetails {
    title: string;
    description: string;
    icon: ReactElement<IconType>;
    details: string[];
}

//contact details
export interface ContactInfoItem {
    label: string;
    variableName: string;
    value: string;
    link: string;
}

//contact form
export interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

//tech stack
export interface TechStack {
    category: string;
    items: string[];
    icon: React.ReactNode;
}

//link class name args
export interface LinkClassNameArgs {
    isActive: boolean;
    isPending?: boolean;
}

//social link
export interface SocialLink {
    name: string;
    url: string;
    icon: React.ComponentType<{ className?: string }>;
}

//route error with message
export interface RouteErrorWithMessage {
    message?: string;
    [key: string]: any;
}

//project types
export interface TechStackItem {
    category: string;
    items: string[];
    icon: 'FiCode' | 'FiLayout' | 'FiTool' | 'FiLayers' | 'FiServer';
}

export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    github: string;
    liveDemo: string;
    techStack: TechStackItem[];
}

export interface ProjectsData {
    projects: Project[];
}