import UserCard from './UserCard';


function ListBoard ({ people }) {
    const peopleList = [];
    people.forEach((person) => {
        peopleList.push(<UserCard key={person.id} name={person.name} age={person.age} occupation={person.occupation} />)
    });

    return peopleList;
}

export default ListBoard;