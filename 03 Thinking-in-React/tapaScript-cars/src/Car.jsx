import PropTypes from "prop-types";

function Car( {car} ) {
    let { title, brand, year, price, isPremium } = car
    return (
        <>
            <h2 className="font-bold text-lg">{title}</h2>
            <p><strong>Brand:</strong> {brand}</p>
            <p><strong>Year:</strong> {year}</p>
            <p><strong>Price:</strong> ${price}</p>
            <p><strong>Premium:</strong> {isPremium?'Yes':'No'}</p>
        </>
    )
}

Car.PropTypes = {
    car: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
}

export default Car;

