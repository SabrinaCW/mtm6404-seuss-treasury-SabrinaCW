// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './pages/Books';
import BookDetails from './pages/BookDetails';
import Quotes from './pages/Quotes';
import './App.css';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/books" element={<Books />} />
      <Route path="/books/:id" element={<BookDetails />} />
      <Route path="/quotes" element={<Quotes />} />
    </Routes>
  </Router>
);

export default App;
