import PropTypes from "prop-types";

function Car( {car} ) {
    let { title, brand, year, price, isPremium } = car
    return (
        <div className='shadow-sm rounded-lg p-3 border-1 border-gray-300 w-md max-w-0.33 mr-4 mb-4'>
            <h2 className="font-bold text-lg">{title}</h2>
            <p><strong>Brand:</strong> {brand}</p>
            <p><strong>Year:</strong> {year}</p>
            <p><strong>Price:</strong> ${price}</p>
            <p><strong>Premium:</strong> {isPremium?'Yes':'No'}</p>
        </div>
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

