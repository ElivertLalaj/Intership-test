import React from 'react';
import Header from './Header';

interface LayoutProps {
  setAnimalType: React.Dispatch<React.SetStateAction<string>>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ setAnimalType, setSearchQuery, children }) => {
  return (
    <div>
      <Header setAnimalType={setAnimalType} searchAnimal={setSearchQuery} />
      {children}
    </div>
  );
};

export default Layout;
