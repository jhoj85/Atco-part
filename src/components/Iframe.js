import { usePartsDispatch } from "./Context"

const Iframe = (number)=>{
    const dispatch= usePartsDispatch();


    const handleClose = () =>{
        dispatch({
            type:'modalClose',
            payload:{view:false}
        })
    }


    return(
        <div className='modal-iframe'>
    
        <iframe title='myiframe' src={`./part/${number.number}.html`} target='_bland'  width='100%'  height='90%'></iframe>
        <button onClick={handleClose}>Close</button>
        </div>
    )
}
export default Iframe