import { useState } from "react";
import validation from "../validation";

const Form = ({login}) => {

    const [userData, setUserData] = useState({
                email: '',
                password: ''
            })

    const [errors, setErrors] = useState({

})

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
         setErrors(
             validation({
                ...userData,
                [event.target.name]: event.target.value
             }))
    }
    
    const handleSubmit = (event) => {
                event.preventDefault();
                login(userData);
            }



    return(
        <form onSubmit={handleSubmit}>
            <label>E-MAIL:</label>
            <input type='email' name='email' placeholder="Ingrese su correo electronico..." value={userData.email} onChange={handleChange}></input>
            {errors.email && <p>{errors.email}</p>}
            <br />
            <label>PASSWORD:</label>
            <input type='password' name='password' placeholder="Ingrese su correo contraseña..." value={userData.password} onChange={handleChange}></input>
            <br />
            {errors.password && <p>{errors.password}</p>}
            <br />
            <button type="submit">LONG IN</button>
        </form>
    )

 }

 export default Form;



// import { useState } from "react";
// import validation from "../validation";

// const Form = ({login}) => {
//     const [userData, setUserData] = useState({
//         email: '',
//         password: ''
//     })

//     const [errors, setErrors] = useState({});
    


//     const handleChange = (event) => {
//         setUserData({
//             ...userData,
//             [event.target.name]: event.target.value
//         })

//         setErrors(
//             validation({
//               ...userData,
//               [event.target.name]: event.target.value
      
//           }))
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         login(userData);
//     }

//     return(
//         <form onSubmit={handleSubmit}>
//             <div>
//             <label>EMAIL</label>
//             <input type="email" placeholder="Ingrese su email..." value={userData.email} onChange={handleChange} name="email"/>
//             {errors.email && <span>{errors.name}</span>}
//             </div>
//             <br />
//             <div>
//             <label>PASSWORD</label>
//             <input type="password" placeholder="Ingrese su password..." value={userData.password}  onChange={handleChange} name="password"/>
//             {errors.password && <span>{errors.password}</span>}
//             <br />
//             </div>
//             <button type="submit">SUBMIT</button>
            

//         </form>
//     )
// }

// export default Form;