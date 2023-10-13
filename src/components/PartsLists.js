import {useState} from 'react'
import {partsNumber} from '../data/datos'
import {useParts, usePartsDispatch} from './Context'
import {createPortal} from 'react-dom'
import ModalContent from './ModalContent'


const PartsLists = ()=>{
  const[showModal, setShowModal]= useState(false)

    const tasks = useParts()
    const parts = partsNumber
   


const busqueda = parts.filter(p =>{

  /* if(p.material){
    return(p.material.toString().includes(tasks.material))
  }else if(p.material&& p.bend){
    return(p.material.toString().includes(tasks.material)&& p.bend.toString().includes(tasks.bend))

  } */
 
/*  return(p.number.toString().includes(tasks.number)) */
  
  return (p.material.toString().includes(tasks.material) && p.bend.toString().includes(9))


})



const handleImg = (e,number)=>{
  setShowModal(true)
  console.log(e, number)
}

//console.log(busqueda)

  return (
    <>
    <section>
      {busqueda.map(p =>  (
      <article  key={p.number} onClick={(e)=> handleImg(e, p.number)}>
        <header>{p.number}</header>
        <img alt={p.number} src={require(`../images/${p.image}`)}/>
      </article>))}
    </section> 
   
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )}
    
    </>
  );
}
export default PartsLists;



/* function Task({ task }) {
    const dispatch = usePartsDispatch();
    
    return(
  <>
      <section>
        <p>{task.number}</p>
      </section>
  </>
    );
    
  } */