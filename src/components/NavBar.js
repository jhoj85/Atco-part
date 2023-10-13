import {Link, NavLink} from 'react-router-dom'
import { usePartsDispatch } from './Context'


const NavBar = ()=>{
    const dispatch = usePartsDispatch()
 

    const handleButton = (e)=>{
      
        dispatch({
            type:'envio',
            payload: true,
           
        });

    }


    return(
     <nav >
        <Link className='title' to="/">ATCO</Link>
        <ul >
            <li type='envio' name='home' onClick={(e)=>handleButton(e)}>
                <NavLink  to="/">Home</NavLink>
            </li>
            <li type='envio' onClick={handleButton}>
            <NavLink to="/search">Search</NavLink>
            </li>
        </ul>
     </nav>
    )
}

export default NavBar;