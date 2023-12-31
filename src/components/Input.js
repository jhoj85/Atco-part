import {usePartsDispatch} from './Context'


const Inputs = () => {
  
    const dispatch = usePartsDispatch()


    const handleInput =(e)=>{
        dispatch({
            type:'textInput',
            payload:{key:e.target.name, value:e.target.value},
        });

       

        if(e.target.value !== ''){
            dispatch({
                type:'active',
                payload:{activo:true}
            })
        }
    }


    return(
           
        <div  className='container-input'>
             <label>Material</label>
        <select className='select-part' type='text' name='material' onChange={handleInput}>
            <option>Material</option>
            <option value='alum'>Aluminum</option>
            <option value='steel'>Steel</option>
            <option value='black galf'>Black Galf</option>
        </select>
        
        <label>Tube Size</label>
        <select  className='select-part' type='text' name='tube' onChange={handleInput}>
            <option>Size</option>
            <option value='2'>2</option>
            <option value='1/4'>1/4</option>
            <option value='5/16'>3</option>
            <option value='3/8'>4</option>
            <option value='1/2'>9</option>
            <option value='5/8'>5/8</option>
            <option value='3/4'>3/4</option>
            <option value='7/8'>7/8</option>
            <option value='1'>1</option>
            <option value='1 1/4'>1 1/4</option>
            <option value='1 1/2'>1 1/2</option>
        </select>

        <label>How many Bend</label>
        <input className='input-part' name='bend'
                type='text'
                onChange={handleInput}
                />
        <label>Ferrule Number</label>
        <input className='input-part' name='ferrule'
                type='text'
                onChange={handleInput}
                />
        <label>Nut Number</label>
        <input className='input-part' name='nut'
                type='text'
                onChange={handleInput}
                />
        <label>Use Valve</label>
        <input name='valve'
                type='checkbox'
                onChange={handleInput}
                />
        <label>Use Block</label>
        <input name='block'
                type='checkbox'
                onChange={handleInput}
                />


        <button>Reset</button>
        </div>
    )
}

export default Inputs;