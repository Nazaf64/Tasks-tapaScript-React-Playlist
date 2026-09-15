import ListBoard from './ListBoard';
import AddPerson from './AddPerson';

function MainBoard() {
    const people = [
        {
            name: "Person One",
            age: 21,
            occupation: "Occupation One"
        },
        {
            name: "Person Two",
            age: 22,
            occupation: "Occupation Two"
        },
        {
            name: "Person Three",
            age: 23,
            occupation: "Occupation Three"
        },
        {
            name: "Person Four",
            age: 24,
            occupation: "Occupation Four"
        },
        {
            name: "Person Five",
            age: 25,
            occupation: "Occupation Five"
        },
    ];

    return (
        <>
            <ListBoard />
            <AddPerson />
        </>
    )
}

export default MainBoard;