import SearchText from './SearchText';
import PremiumSelect from './PremiumSelect';

function Search({ cars, searchTerm, onSearch, onPremiumSelect, premiumToggle }) {
    return(
        <div className='flex flex-wrap mb-4'>
            <SearchText searchTerm={searchTerm} onSearch={onSearch} />
            <PremiumSelect cars={cars} premiumToggle={premiumToggle} onPremiumSelect={onPremiumSelect} />
        </div>
    )
}

export default Search;