import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../redux/action";
import { useState, useEffect } from 'react';
import {connect} from 'react-redux';


function  Card(props) {
   const {id, name, status, species, gender, origin, image, onClose, addFav,removeFav, myFavorites} = props;
   
   const [isFav, setFavs] = useState(false);

   const handleFavorite = ()=>{
      // if(isFav){
         // removeFav(id)
      // } else {
         // addFav({id, name, status,species, gender, origin, image, onClose}
      // }
      isFav ? removeFav(id) : addFav({id,  status,species, gender, origin, image})
      setFavs(!isFav)
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setFavs(true);
         }
      });
   }, [myFavorites]);

   
return (
      <div>
         {
         isFav 
         ? (
            <button onClick={handleFavorite}>❤️</button>
         ) 
         : (
            <button onClick={handleFavorite}>🤍</button>
         )
         }
       {/* <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍' }</button> */}
         
         <button onClick={() =>onClose(id)}>X</button>
         <NavLink to={`/detail/${id}`} >
         <h2>{name}</h2>
         </NavLink>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='' />
      </div> 
   );
}

const mapStateToProps = (state)=>{
   return{
      myFavorites: state.myFavorites
   }
};

const mapDispatchToProps = (dispatch)=>{
   return {
      addFav: (character)=> dispatch(addFav(character)),
      removeFav: (id)=> dispatch(removeFav(id))
   }
};

export default connect(
   mapStateToProps, 
   mapDispatchToProps
   )(Card)


