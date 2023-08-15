import {connect} from 'react-redux';
import Card from './Card';
import { filterCards,orderCards } from '../redux/action';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Favorites = ({myFavorites})=>{
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (event)=>{
        dispatch(orderCards(event.target.value));
        setAux(true)
    };

    const handleFilter = (event)=>{
        dispatch(filterCards(event.target.value))
    };

    return(
        <div>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Desendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                <option value="allCharacters">All Characters</option>
            
            </select>

            <h1>Mis favoritos!</h1>
            {
                myFavorites.length && 
                myFavorites.map(({id, name,status, species,origin,image,gender, onClose})=>{
                    return (
                        <Card
                        key={id}
                        id={id}
                        name= {name}
                        status={status}
                        species={species}
                        origin={origin}
                        image={image}
                        gender={gender}
                        onClose={onClose}
                        />
                    )
                })
            }
        </div>
    )
};

const mapStateToProps = (state)=>{
    return {
        myFavorites: state.myFavorites
    }
};


 export default connect(mapStateToProps, null)(Favorites)


// import {connect, useDispatch} from 'react-redux';
// import Card from './Card';
// import { filterCards, orderCards } from '../redux/action'; 



// const Favorites = ({myFavorites})=>{

//     const dispatch = useDispatch();

//     const handleOrder = (event)=>{
//         dispatch(orderCards(event.target.value));
//     };

//     const handleFilter = (event)=>{
//         dispatch(filterCards(event.target.value))
//     };

//     return(
//         <div>
//             <select onChange={handleOrder}>
//                 <option value="A">Ascendente</option>
//                 <option value="D">Desendente</option>
//             </select>

//             <select onChange={handleFilter}>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="Genderless">Genderless</option>
//                 <option value="unknown">unknown</option>
//             </select>
//             <h1>Mis favoritos!</h1>
//                 {
//                 myFavorites?.map(fav =>{
//                     return (
//                         <Card
//                         key={fav.id}
//                         id={fav.id}
//                         name= {fav.name}
//                         status={fav.status}
//                         species={fav.species}
//                         origin={fav.origin}
//                         image={fav.image}
//                         gender={fav.gender}          
//                        />
//                     )}
//                 )
//             }
//         </div>
//     )
// };

// const mapStateToProps = (state)=>{
//     return {
//         myFavorites: state.myFavorites
//     }
// };


//  export default connect(
//     mapStateToProps,
//      null
//      )(Favorites)




 // myFavorites.length &&
                //  myFavorites.map(({id, name,status, species,origin,image,gender, onClose})=>{
                //      return (
                //          <Card
                //          key={id}
                //          id={id}
                //          name= {name}
                //          status={status}
                //          species={species}
                //          origin={origin}
                //          image={image}
                //          gender={gender}
                //          onClose={onClose}
                //         />