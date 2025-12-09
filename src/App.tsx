import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/mia/Gallery'
import Calendar from './pages/mia/Calendar'
import Contact from './pages/mia/Contact'
import YichenAbout from './pages/yichen/About'
import YichenNews from './pages/yichen/News'
import YichenProjects from './pages/yichen/Projects'
import YichenPapers from './pages/yichen/Papers'
import YichenContact from './pages/yichen/YichenContact'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/contact" element={<Contact />} />
      {/* Yichen's routes */}
      <Route path="/yichen/about" element={<YichenAbout />} />
      <Route path="/yichen/news" element={<YichenNews />} />
      <Route path="/yichen/projects" element={<YichenProjects />} />
      <Route path="/yichen/papers" element={<YichenPapers />} />
      <Route path="/yichen/contact" element={<YichenContact />} />
    </Routes>
  )
}
