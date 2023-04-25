import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Animals from './pages/animals'
import Detail from './pages/detail'
import Plants from './pages/plants'
import Write from './pages/write'
import { GlobalStyle } from './styles/GlobalStyle'
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Animals />} />
        {/* 홈에 animal 만드시면 댑니당 */}
        <Route path="/plants" element={<Plants />} />
        <Route path="/write" element={<Write />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
