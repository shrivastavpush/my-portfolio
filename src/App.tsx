import React, { ReactNode } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer'

import About from './components/About/About'
import Bio from './components/About/Bio/Bio'
import Education from './components/About/Education/Education'
import Experience from './components/About/Experience/Experience'
import Interests from './components/About/Interests/Interests'
import NotFoundPage from './components/NotFoundPage'

import Project from './components/Project/Project'
import Project1 from './components/Project/Project1/Project1'
import Project2 from './components/Project/Project2/Project2'
import Project3 from './components/Project/Project3/Project3'
import Project4 from './components/Project/Project4/Project4'

import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom'
interface RouteDefinition {
  index?: boolean;
  path?: string;
  element: ReactNode;
}

const aboutChild: RouteDefinition[] = [
  { index: true, element: <Bio /> },
  { path: "bio", element: <Bio /> },
  { path: "education", element: <Education /> },
  { path: "experience", element: <Experience /> },
  { path: "interests", element: <Interests /> }
]

const projectChild: RouteDefinition[] = [
  { index: true, element: <Project1 /> },
  { path: "project_1", element: <Project1 /> },
  { path: "project_2", element: <Project2 /> },
  { path: "project_3", element: <Project3 /> },
  { path: "project_4", element: <Project4 /> },
]

const routes: RouteObject[] = [
  {
    path: "/",
    element: (<> <Navbar /> <Home /> <Footer /> </>)
  },
  {
    path: "/about",
    element: (<> <Navbar /> <About /> <Footer /> </>),
    children: aboutChild
  },
  {
    path: "/projects",
    element: (<> <Navbar /> <Project /> <Footer /> </>),
    children: projectChild
  },
  {
    path: "/contact",
    element: (<> <Navbar /> <Contact /> <Footer /> </>)
  },
  {
    path: "/*",
    element: (<> <Navbar /> <NotFoundPage /><Footer /> </>)
  }
]

const router = createBrowserRouter(routes)

const App: React.FC = () => {
  return <RouterProvider router={router} />
}

export default App
