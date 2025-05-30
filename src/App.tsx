import Navbar from './component/Navbar'
import Footer from './component/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'

function App() {

  return (
    <main className='text-center py-10 bg-zinc-950'>
        <Router>
            <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
      <Footer />
        </Router>
    </main>
  )
}

export default App
