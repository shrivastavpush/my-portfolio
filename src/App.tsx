import React from 'react'
import './App.css'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import RootLayout from './components/RootLayout'

import About from './components/About/About'
import Bio from './components/About/Bio/Bio'
import Education from './components/About/Education/Education'
import Experience from './components/About/Experience/Experience'
import Interests from './components/About/Interests/Interests'
import NotFoundPage from './components/NotFoundPage'

import Project from './components/Project/Project'
import ProjectDetail from './components/Project/ProjectDetail'

import { createBrowserRouter, RouterProvider, RouteObject, Navigate } from 'react-router-dom'
import { RouteDefinition } from './types/Types'

const aboutChild: RouteDefinition[] = [
  { index: true, element: <Bio /> },
  { path: "bio", element: <Bio /> },
  { path: "education", element: <Education /> },
  { path: "experience", element: <Experience /> },
  { path: "interests", element: <Interests /> }
]

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />,
        children: aboutChild
      },
      {
        path: "projects",
        element: <Project />,
        children: [
          { index: true, element: <Navigate to="all" replace /> },
          { path: "all", element: null },
          { path: ":projectId", element: <ProjectDetail /> }
        ]
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "*",
        element: <NotFoundPage />
      }
    ]
  }
]

const router = createBrowserRouter(routes)

const App: React.FC = () => {
  return <RouterProvider router={router} />
}

export default App
