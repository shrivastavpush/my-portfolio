import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About/About'
import Project from './components/Project/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

import Bio from './components/About/Bio'
import Education from './components/About/Education'
import Experience from './components/About/Experience'
import Interests from './components/About/Interests'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /><Footer /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /><Footer /></>,
      children: [
        {
          path: "bio",
          element: <><Bio /></>
        },
        {
          path: "education",
          element: <><Education /></>
        },
        {
          path: "experience",
          element: <><Experience /></>
        },
        {
          path: "interests",
          element: <><Interests /></>
        }
      ]
    },
    {
      path: "/projects",
      element: <><Navbar /><Project /><Footer /></>
    },
    {
      path: "/contact",
      element: <><Navbar /><Contact /><Footer /></>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
