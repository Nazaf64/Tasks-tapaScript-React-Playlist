import Car from './Car';

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

export default ListBoard;