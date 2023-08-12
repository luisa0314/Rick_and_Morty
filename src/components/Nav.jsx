import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom"; 


const Nav = ({ onSearch, onRandomSearch }) => {
    return(
        <nav>
            <SearchBar onSearch={onSearch}/>
            <button onClick={onRandomSearch}>Agregar Aleatorio</button>
             <button>
             <NavLink to='/about'>About</NavLink><br/>
             </button>
             <button>
             <NavLink to='/home'>Home</NavLink>
             </button>
             <button>
             <NavLink to='/favorites'>Favorites</NavLink>
             </button>

        </nav>
        
    )
}


export default Nav;

