import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState, useEffect} from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';



function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false)
   const navigate =  useNavigate();
   const location = useLocation();

   const email = 'luisa@gmail.com';
   const password = 'lui1234';

   const login = (userData) => {
      if ( userData.email == email  && userData.password == password) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onRandomSearch = () => {
      const randomId = Math.floor(Math.random() * 826) + 1;
    
      const existingCharacter = characters.find(
        (character) => character.id === randomId
      );
    
      if (existingCharacter) {
        window.alert('¡Este personaje ya está en la lista!');
        return;
      }
    
      axios(`https://rickandmortyapi.com/api/character/${randomId}`)
        .then(({ data }) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('¡No hay personajes con este ID!');
          }
        })
        .catch((error) => {
          console.error('Error al buscar el personaje:', error);
        });
    }
    
   function onSearch(id) {
      const existingCharacter = characters.find((character) =>
      character.id === Number(id)
      );

      if (existingCharacter) {
         window.alert('¡Este personaje ya esta en la lista');
         return;
      }
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
 

   const onClose = (id)=> {
      const characterFiltered = characters.filter(character =>
         character.id !== Number(id)); 
         setCharacters(characterFiltered); 
   }

    


   return (
       <div className='App'>
         {
         location.pathname !== '/' && <Nav onSearch={onSearch} onRandomSearch={onRandomSearch}/>
         }
         <Routes>
         <Route path='/' element={<Form login={login}/>} /> 
         <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/detail/:id' element={<Detail/>}/>
         
         </Routes>
         
         
      </div>
   );

   
}

export default App;
//