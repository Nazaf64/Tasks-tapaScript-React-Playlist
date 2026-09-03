import Header from './Header';
import Search from './Search';
import ListBoard from './ListBoard';

function Board() {
    return(
        <>
            <Header header="tapaScript Cars" />
            <Search />
            <ListBoard />
        </>
    )
}

export default Board;