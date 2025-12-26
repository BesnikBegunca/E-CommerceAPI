import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import CategoryList from './components/category/CategoryList';
import AddCategory from './components/category/AddCategory';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/Category/Create" element={<AddCategory />} />
        {/* mund të shtosh About, Contact, Careers */}
      </Routes>
    </Router>
  );
}

export default App;
