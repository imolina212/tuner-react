import './App.css';

import { Routes, Route } from 'react-router-dom'

//Pages
import Edit from './Pages/Edit'
import Home from './Pages/Home'
import New from './Pages/New'
import Index from './Pages/Index'
import Show from './Pages/Show'
import Error from './Pages/Error'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/songs" element={<Index />} />
        <Route path="/songs/:id" element={<Show />} />
        <Route path="/songs/new" element={<New />} />
        <Route path="/songs/:id/Edit" element={<Edit />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
