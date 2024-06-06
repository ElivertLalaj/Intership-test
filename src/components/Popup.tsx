import React from 'react';

interface Animal {
  id: number;
  name: string;
  image: string;
  origin: string;
  description: string; 
}

interface PopupProps {
  animal: Animal;
  closePopup: () => void;
}

const Popup: React.FC<PopupProps> = ({ animal, closePopup }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={closePopup}>&times;</span>
        <img src={animal.image} alt={animal.name} />
        <h2>{animal.name}</h2>
        <p><strong>Origin:</strong> {animal.origin}</p>
        <p><strong>Description:</strong> {animal.description}</p>
      </div>
    </div>
  );
};

export default Popup;
