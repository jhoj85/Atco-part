import { createContext, useContext, useReducer} from 'react'


const PartsContext =createContext(null);
const PartsDispatch = createContext(null);


export default function PartsProvider({children}){
    const [state, dispatch]=useReducer( PartsReducer, inicio)

    return(
        <>
        <PartsContext.Provider value={state}>
        <PartsDispatch.Provider value={dispatch}>
            {children}
        </PartsDispatch.Provider>
        </PartsContext.Provider>
        </>
    )
}

export const useParts = ()=>{
    return useContext(PartsContext)
}

export const usePartsDispatch = ()=>{
    return useContext(PartsDispatch)
}



const PartsReducer = (state, action) =>{
    //console.log(action)
        switch(action.type){
            case 'textInput':
                return {...state,
                 [action.payload.key]: action.payload.value};

            case 'envio':
                return {...state, view: action.payload}
           
            default:
                throw Error(`Unknown action type: ${action.type}`)
        }
}


const inicio =[];
