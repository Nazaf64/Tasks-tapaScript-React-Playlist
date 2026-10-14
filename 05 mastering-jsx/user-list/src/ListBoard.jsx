import UserCard from './UserCard';
import PropTypes from "prop-types";


function ListBoard ({ people }) {
    const peopleList = [];
    // console.log(people);
    people.forEach((person) => {
        peopleList.push(<UserCard key={person.id} name={person.name} age={person.age} occupation={person.occupation} />)
    });

    return peopleList;
}

ListBoard.propTypes = {
    people: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired,
            occupation: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ListBoard;