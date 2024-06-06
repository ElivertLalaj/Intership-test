import React from 'react';

interface Animal {
  id: number;
  name: string;
  image: string;
  origin: string;
  description: string; 
}

interface AnimalCardProps {
  animal: Animal;
  showPopup: (animal: Animal) => void; 
}

const AnimalCard: React.FC<AnimalCardProps> = ({ animal, showPopup }) => {
  return (
    <div className="animal-card" onClick={() => showPopup(animal)}>
      <img src={animal.image} alt={animal.name} />
      <h3>{animal.name}</h3>
      <p>{animal.origin}</p>
    </div>
  );
};

export default AnimalCard;
