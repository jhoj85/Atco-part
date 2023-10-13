import {Link, NavLink} from 'react-router-dom'
import { usePartsDispatch, useParts } from './Context'


const NavBar = ()=>{
    const dispatch = usePartsDispatch()
    const state = useParts()
  

    const handleButton = ()=>{
       if(state.view == true){
            dispatch({
                type:'envio',
                payload: false
            
            });
       }else{
        dispatch({
            type:'envio',
            payload: true
           
        });
       }
       

    }


    return(
     <nav >
        <Link className='title' to="/">ATCO</Link>
        <ul >
            <li type='envio' onClick={handleButton}>
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