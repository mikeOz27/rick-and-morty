import './App.css'
import CharacterDetail from './components/CharacterDetail';
import CharacterList from './components/CharacterList'
import { BrowserRouter as BR, Routes, Route, Link } from "react-router-dom";
import Episode from './components/Episode';

function App() {
  return (
    <>
      <BR basename="/rick-and-morty-react/">
        <h1 className="text-center display-1 py-4 press-start-2p-regular animate__animated animate__bounceInDown">
          Rick and Morty
        </h1>
        <nav className="d-flex justify-content-center">
          <Link to="/" className="justify-content-center d-flex nes-btn">Characters</Link>
        <Link to="/episodes" className="justify-content-center d-flex nes-btn">Episodes</Link>
        </nav>
        <br />
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/episodes" element={<Episode />} />
        </Routes>
      </BR>
    </>
  );
}

export default App
