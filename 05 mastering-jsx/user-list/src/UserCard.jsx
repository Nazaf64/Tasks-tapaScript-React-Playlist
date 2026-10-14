import PropTypes from "prop-types";

function UserCard({ name, age, occupation }) {
    return(
        <div className="border-2 rounded-3xl p-4 mb-3">
            <p><strong>Name: </strong>{name}</p>
            <p><strong>Age: </strong>{age}</p>
            <p><strong>Occupation: </strong>{occupation}</p>
        </div>
        
    )
}

UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    occupation: PropTypes.string.isRequired,
};

export default UserCard;