import PropTypes from "prop-types";

function SearchText({ searchTerm, onSearch }) {
    return (
        <form>
            <input 
            type="text" 
            placeholder="Search cars..."
            value={searchTerm}
            onChange={(event) => onSearch(event.target.value)}
            className="border rounded-lg p-1 border-1 border-gray-300 mr-2"
            />
        </form>
    )
}

SearchText.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
};

export default SearchText;