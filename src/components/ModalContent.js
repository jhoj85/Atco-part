import CarouselImg  from './CarouselImg';


export default function ModalContent({ onClose }) {
    return (
      <div className="modal">
      
        <CarouselImg/>
        <button onClick={onClose}>Close</button>
         {/* <iframe title='myiframe' src="./data/151611.html" target='_bland'  width='100%'  height='80%'></iframe>
       */}
      </div>
    );
  }