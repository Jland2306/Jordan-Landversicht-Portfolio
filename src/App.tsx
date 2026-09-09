import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import RouteWipe from './components/RouteWipe'
import Title from './pages/Title'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Skills from './pages/Skills'
import About from './pages/About'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[200] focus:bg-red focus:px-4 focus:py-2 focus:font-display focus:uppercase focus:text-paper">
        Skip to content
      </a>
      <Nav />
      <RouteWipe />
      <main id="main" className="min-h-screen bg-jet pb-16 md:pb-0 md:pl-56 lg:pl-64 xl:pl-72">
        <Routes>
          <Route path="/" element={<Title />} />
          <Route path="/projects" element={<Projects />}>
            <Route path=":slug" element={<ProjectDetail />} />
          </Route>
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
