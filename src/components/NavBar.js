import {Link, NavLink} from 'react-router-dom'
import { usePartsDispatch, useParts } from './Context'


const NavBar = ()=>{
    const dispatch = usePartsDispatch()
    const state = useParts()
  

    return(
     <nav >
        <Link className='title' to="/">ATCO</Link>
        <div className='menu'>
            <span></span>
            <span></span>
        </div>
        <ul >
            <li>
                <NavLink  to="/">Home</NavLink>
            </li>
            <li >
            <NavLink to="/search">Search</NavLink>
            </li>
        </ul>
     </nav>
    )
}

export default NavBar;