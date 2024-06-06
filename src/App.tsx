
import { useState } from 'react';
import ContactUs from './components/ContactUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Cats from './components/Cats';
import Birds from './components/Birds';
import Layout from './components/Layout';
import Dogs from './components/Dogs';
import Home from './components/Home';
import AboutUs from './components/AboutUs';

function App() {
  const [animalType, setAnimalType] = useState<string>('dogs');
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <>
      <div className="App">
      <Router>
      <Layout setAnimalType={setAnimalType} setSearchQuery={setSearchQuery}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contantUs" element={<ContactUs />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/birds" element={<Birds animalType={animalType} searchQuery={searchQuery} />} />
          <Route path="/cats" element={<Cats animalType={animalType} searchQuery={searchQuery} />} />
          <Route path="/dogs" element={<Dogs animalType={animalType} searchQuery={searchQuery} />} />

        </Routes>
      </Layout>
    </Router>
      </div>
    </>
  )
  
}

export default App


