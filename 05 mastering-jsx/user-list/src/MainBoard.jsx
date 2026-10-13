import ListBoard from './ListBoard';
import AddPerson from './AddPerson';
import { useState } from 'react';

function MainBoard() {
    const data = [
        {
            id: crypto.randomUUID(),
            name: "Person One",
            age: 21,
            occupation: "Occupation One"
        },
        {
            id: crypto.randomUUID(),
            name: "Person Two",
            age: 22,
            occupation: "Occupation Two"
        },
        {
            id: crypto.randomUUID(),
            name: "Person Three",
            age: 23,
            occupation: "Occupation Three"
        },
        {
            id: crypto.randomUUID(),
            name: "Person Four",
            age: 24,
            occupation: "Occupation Four"
        },
        {
            id: crypto.randomUUID(),
            name: "Person Five",
            age: 25,
            occupation: "Occupation Five"
        },
    ];

    const [people, setPeople] = useState(data);
    
    // COUNT OF PERSONS
    // let personCount = data.length;
    const [count, setCount] = useState(data.length);

    // GENERATE RANDOM WORDS FOR NEW NAMES
    const wordGenerate = () => {
        let length = Math.floor(Math.random() * 5) + 3;
        let result = '';
            for (let i = 0; i < length; i++) {
                result += String.fromCharCode(97 + Math.floor(Math.random() * 26));
            }
        return result;
    }

    const add = () => {
        // CREATE NEW OBJECT FOR A NEW PERSON
        let newData = new Object;

        // ADD NEW PERSON'S DETAILS IN THE OBJECT
        newData.id = crypto.randomUUID();
        newData.name = wordGenerate();
        newData.age = Math.floor(Math.random() * 85);
        newData.occupation = wordGenerate();

        // APPEND THE NEW OBJECT TO THE EXISTING ARRAY OF PEOPLE
        setPeople(people => [...people, newData]);
        
        // UPDATE THE COUNT WITH THE NEW ENTRY INCLUDED
        setCount(count => count + 1);

    }

    return (
        <div className='box-border flex justify-center items-center'>
            <div className='border-2 rounded-3xl m-6 p-8 max-w-300'>
                <h1>{count}</h1>
                <AddPerson add={add} />
                <ListBoard people={people} />            
            </div>
        </div>
        
    )
}

export default MainBoard;