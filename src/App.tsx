import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'
import GlossaryPage from './pages/GlossaryPage'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/glossary" element={<GlossaryPage />} />
      </Routes>
    </div>
  )
}

export default App
