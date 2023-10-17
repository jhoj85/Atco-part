import {useRef, useEffect} from 'react'
import { usePartsDispatch } from "./Context";

const InputSearch = ()=>{
    const inputRef = useRef(null);
    const dispatch = usePartsDispatch()


    useEffect(()=>{
        inputRef.current.focus();
    },[]);

    const handleInput=(e)=>{
        dispatch({
            type:'textInput',
            payload: {key:e.target.name, value:e.target.value}
        })
    }


    return(
        <div  className='container-input'> 
        <label htmlFor='number' >Part Number</label>
        <input ref={inputRef} className='input-part' id='number' name='number'
            type='text'
            onChange={handleInput}
        /> 
        </div>
    )
}
export default InputSearch;