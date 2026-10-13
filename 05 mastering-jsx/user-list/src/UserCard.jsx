

function UserCard({ name, age, occupation }) {
    return(
        <div className="border-2 rounded-3xl p-4">
            <p><strong>Name: </strong>{name}</p>
            <p><strong>Age: </strong>{age}</p>
            <p><strong>Occupation: </strong>{occupation}</p>
        </div>
        
    )
}

export default UserCard;