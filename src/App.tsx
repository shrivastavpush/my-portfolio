import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About/About'
import Project from './components/Project/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

import Bio from './components/About/Bio/Bio'
import Education from './components/About/Education/Education'
import Experience from './components/About/Experience/Experience'
import Interests from './components/About/Interests/Interests'

import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
  {
    path: "/",
    element: (<> <Navbar /> <Home /> <Footer /> </>)
  },
  {
    path: "/about",
    element: (<> <Navbar /> <About /> <Footer /> </>),
    children: [
      { index: true, element: <Bio /> },
      { path: "bio", element: <Bio /> },
      { path: "education", element: <Education /> },
      { path: "experience", element: <Experience /> },
      { path: "interests", element: <Interests /> }
    ]
  },
  {
    path: "/projects",
    element: (<> <Navbar /> <Project /> <Footer /> </>),
    children: []
  },
  {
    path: "/contact",
    element: (<> <Navbar /> <Contact /> <Footer /> </>)
  }
]

const router = createBrowserRouter(routes)

function App() {
  return <RouterProvider router={router} />
}

export default App
