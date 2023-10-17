import {useState, useEffect} from 'react'
import {partsNumber} from '../data/datos'
import {useParts, usePartsDispatch} from './Context'
import {createPortal} from 'react-dom'
import ModalContent from './ModalContent'


const Lists = ()=>{
    const tasks = useParts()
    const[showModal, setShowModal]= useState(false)
    const [number, setNumber]=useState({})
    const dispatch = usePartsDispatch()
    const parts = partsNumber
  

const busqueda = parts.filter(p =>{
    return(p.number.toString().includes(tasks.number))
})


useEffect(() => {
    setShowModal(tasks.view);
  }, [tasks.view]);
  
  const handleImg = (num) => {
    dispatch({
      type: 'modal',
      payload: { view: true },
    });
    setNumber(num);
  };


  return (
    <>
    <section>
      {busqueda.map(p =>  (
      <article  key={p.number} onClick={()=> handleImg(p.number)}>
        <header>{p.number}</header>
        <img alt={p.number} src={require(`../images/${p.image}`)}/>
      </article>))}
    </section> 
   
      {showModal && createPortal(
        <ModalContent number={number} />,
        document.body
      )}
    
    </>
  );
}
export default Lists;

