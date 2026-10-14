import PropTypes from "prop-types";

function AddPerson({ add }) {
    return(
        <button
        className="border-2 rounded-3xl pl-3 pr-3 pt-1 pb-1 mb-1 shadow-2xl" 
        onClick={add}>+</button>
    )
}

AddPerson.propTypes = {
    add: PropTypes.func.isRequired,
};

export default AddPerson;