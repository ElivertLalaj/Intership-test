import React, { useState, useEffect } from 'react';
import AnimalCard from './AnimalCard';
import Popup from './Popup';
import "../Css/Animal.css"

interface Animal {
  id: number;
  name: string;
  image: string;
  origin: string;
  description: string;
}

interface Dogs {
  animalType: string;
  searchQuery: string;
}

const Dogs: React.FC<Dogs> = ({ animalType, searchQuery }) => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);

  useEffect(() => {
    fetch(`https://freetestapi.com/api/v1/dogs`)
      .then(response => response.json())
      .then(data => setAnimals(data.animals || data)) 
      .catch(error => console.error('Error fetching data:', error));
  }, [animalType]);

  const filteredAnimals = animals.filter(animal =>
    animal.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="gallery">
      {filteredAnimals.map(animal => (
        <AnimalCard key={animal.id} animal={animal} showPopup={setSelectedAnimal} />
      ))}
      {selectedAnimal && (
        <Popup animal={selectedAnimal} closePopup={() => setSelectedAnimal(null)} />
      )}
    </div>
  );
};

export default Dogs;
