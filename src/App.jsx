import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RegisterPage from './pages/RegisterPage';  // For registration
import LoginPage from './pages/LoginPage';  // For login
import PropertyList from './components/PropertyList';  // For listing properties
import AddPropertyPage from './pages/AddPropertyPage';  // Page for adding properties
import Home from './pages/Home';  // Home page
import PropertyDetail from './components/PropertyDetail';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          {/* Define routes for the app */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/properties" element={<PropertyList />} />
          <Route path="/add-property" element={<AddPropertyPage />} />  
          <Route path="/properties/:id" component={PropertyDetail} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
