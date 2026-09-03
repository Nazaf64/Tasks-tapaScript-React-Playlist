import SearchText from './SearchText';
import PremiumSelect from './PremiumSelect';

function Search() {
    return(
        <div className='flex flex-wrap mb-4'>
            <SearchText />
            <PremiumSelect />
        </div>
    )
}

export default Search;