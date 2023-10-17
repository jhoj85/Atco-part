import CarouselImg  from './CarouselImg';
import Iframe from './Iframe'


export default function ModalContent({ number }) {
  console.log(window.location.pathname)

  
      if(window.location.pathname == '/search'){
       return <CarouselImg number={number}/>
      }else if(window.location.pathname == '/'){
       return <Iframe number={number}/>
      }
    

 
  }