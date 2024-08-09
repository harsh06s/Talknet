import { Button } from '@chakra-ui/react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Homepage from "./Pages/Homepage";
import Chatpages from './Pages/Chatpages';
import "./App.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Chat" element={<Chatpages />} />
      </Routes>
    </div>
  );
}

export default App;

