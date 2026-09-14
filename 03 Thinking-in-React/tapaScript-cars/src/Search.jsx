import SearchText from './SearchText';
import PremiumSelect from './PremiumSelect';
import PropTypes from "prop-types";

function Search({ cars, searchTerm, onSearch, onPremiumSelect, premiumToggle }) {
    return(
        <div className='flex flex-wrap mb-4'>
            <SearchText searchTerm={searchTerm} onSearch={onSearch} />
            <PremiumSelect cars={cars} premiumToggle={premiumToggle} onPremiumSelect={onPremiumSelect} />
        </div>
    )
}

Search.propTypes = {
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
    onSearch: PropTypes.func.isRequired,
    premiumToggle: PropTypes.bool.isRequired,
    onPremiumSelect: PropTypes.func.isRequired,
};

export default Search;