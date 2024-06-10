import React, { useEffect, useState } from 'react';
import img1 from '../assets/dog_brains_2500.webp';
import img2 from '../assets/cats.jpg';
import img3 from '../assets/birds.jpg';
import '../Css/Home.css';
import AnimalCard from './AnimalCard';
import Popup from './Popup';

interface Animal {
    id: number;
    name: string;
    image: string;
    origin: string;
    description: string;
}

interface AnimalTypes {
    animalType: string;
    searchQuery: string;
}

const url1 = "https://freetestapi.com/api/v1/dogs?limit=4";
const url2 = "https://freetestapi.com/api/v1/cats?limit=4";
const url3 = "https://freetestapi.com/api/v1/birds?limit=4";

const Home: React.FC<AnimalTypes> = () => {
    const [dogs, setDogs] = useState<Animal[]>([]);
    const [cats, setCats] = useState<Animal[]>([]);
    const [birds, setBirds] = useState<Animal[]>([]);
    const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);




    useEffect(() => {
        Promise.all([
            fetch(url1).then(response => response.json()),
            fetch(url2).then(response => response.json()),
            fetch(url3).then(response => response.json())
        ])
            .then(([dogsData, catsData, birdsData]) => {
                console.log("Dogs Data:", dogsData);
                console.log("Cats Data:", catsData);
                console.log("Birds Data:", birdsData);
                setDogs(dogsData.animals || dogsData);
                setCats(catsData.animals || catsData);
                setBirds(birdsData.animals || birdsData);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="gallery">
                <h1>Dogs List</h1>

                {dogs.map(animal => (
                    <AnimalCard key={animal.id} animal={animal} showPopup={setSelectedAnimal} />
                ))}

                <h1>Cats List</h1>

                {cats.map(animal => (
                    <AnimalCard key={animal.id} animal={animal} showPopup={setSelectedAnimal} />
                ))}

                <h1>Birds List</h1>

                {birds.map(animal => (
                    <AnimalCard key={animal.id} animal={animal} showPopup={setSelectedAnimal} />
                ))}
                {selectedAnimal && (
                    <Popup animal={selectedAnimal} closePopup={() => setSelectedAnimal(null)} />
                )}
            </div>
        </>
    );
};

export default Home;
