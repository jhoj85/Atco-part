import {useState, useEffect} from 'react'
import {partsNumber} from '../data/datos'
import {useParts, usePartsDispatch} from './Context'
import {createPortal} from 'react-dom'
import ModalContent from './ModalContent'


const PartsLists = ()=>{
  const[showModal, setShowModal]= useState(false);
  const [number, setNumber]=useState({});
  const tasks = useParts()
  const dispatch = usePartsDispatch()


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


const searchParts = partsNumber.filter(p => {
  return (!tasks.material || p.material.includes(tasks.material)) &&
         (!tasks.tube || p.tube.toString().includes(tasks.tube)) &&
         (!tasks.bend || p.bend.toString().includes(tasks.bend)) &&
         (!tasks.ferrule || p.ferrule.toString().includes(tasks.ferrule)) &&
         (!tasks.nut || p.nut.toString().includes(tasks.nut));
        
});

console.log(searchParts)


  return (
    <>
      {
        tasks.activo ? <section>
        {searchParts.map(p =>  (
        <article  key={p.number} onClick={()=> handleImg(p.number)}>
          <header>{p.number}</header>
          <img alt={p.number} src={require(`../images/${p.image}`)}/>
        </article>))}
      </section>   :  null
      }
      
   
      {showModal && createPortal(
        <ModalContent number={number} onClose={() => setShowModal(false)} />,
        document.body
      )}
    
    </>
  );
}
export default PartsLists;

