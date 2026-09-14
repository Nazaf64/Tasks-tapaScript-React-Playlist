import Car from './Car';
import PropTypes from "prop-types";

function ListBoard({ cars, searchTerm }) {
    const rows = [];
    cars.forEach((car) => {
        if(car.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
            return;
        }
        rows.push(<Car key={car.id} car={car} isPremium={car.isPremium} />)
    });

    return (
        <div className='flex flex-wrap justify-left'>
            {rows}
        </div>
    )
}

ListBoard.propTypes = {
    cars: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            brand: PropTypes.string.isRequired,
            year: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
            isPremium: PropTypes.bool.isRequired,
        })
    ).isRequired,
    searchTerm: PropTypes.string.isRequired,
};

export default ListBoard;