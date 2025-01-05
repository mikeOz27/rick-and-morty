import './App.css'
import CharacterDetail from './components/CharacterDetail';
import CharacterList from './components/CharacterList'
import { BrowserRouter as BR, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <h1 className="text-center display-1 py-4 press-start-2p-regular">
        Rick adn Morty
      </h1>

      <BR>
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
        </Routes>
      </BR>
    </>
  );
}

export default App
