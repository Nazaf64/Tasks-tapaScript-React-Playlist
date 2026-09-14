import Header from './Header';
import Search from './Search';
import ListBoard from './ListBoard';
import { useState } from "react";

function Board() {
    const CARS = [   
        { id: 1, title: "Luxury Sedan", brand: "Mercedes", year: 2023, price: 80000, isPremium: true },
        { id: 2, title: "Family SUV", brand: "Toyota", year: 2022, price: 45000, isPremium: false },
        { id: 3, title: "Sports Car", brand: "Porsche", year: 2023, price: 120000, isPremium: true },
        { id: 4, title: "Electric Hatchback", brand: "Nissan", year: 2022, price: 35000, isPremium: false },
        { id: 5, title: "Luxury SUV", brand: "BMW", year: 2023, price: 90000, isPremium: true },
    ];

    const [cars, setCars] = useState(CARS);
    const [searchTerm, setSearchTerm] = useState("");
    const [premiumToggle, setPremiumToggle] = useState(false);

    const toggleFeatured = () => {
        if(premiumToggle===true) {
            setPremiumToggle(false);
            setCars(CARS);
        } else {
            setPremiumToggle(true); 
            setCars(cars.filter((car) => car.isPremium === true));
        }
    }

    return(
        <>
            <Header header="tapaScript Cars" />
            <Search cars={cars} searchTerm={searchTerm} onSearch={setSearchTerm} premiumToggle={premiumToggle} onPremiumSelect={toggleFeatured} />
            <ListBoard cars={cars} searchTerm={searchTerm} />
        </>
    )
}

export default Board;