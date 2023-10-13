import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import prueba1 from '../pdf/3-92554.pdf'

const CarouselImg = ()=>{

    const createCarouselItemImage = (index, options = {}) => (
        <div key={index}>
            <img src={`/assets/${index}.jpeg`} />
            <p className="legend">Legend {index}</p>
        </div>
    );
    const baseChildren = <div>{[1].map(createCarouselItemImage)}</div>;

const tooglesGroupId = 'Toggles';
const valuesGroupId = 'Values';
const mainGroupId = 'Main';

    const getConfigurableProps = () => ({
        showArrows: ('showArrows', true, tooglesGroupId),
        showStatus: ('showStatus', true, tooglesGroupId),
        showIndicators: ('showIndicators', true, tooglesGroupId),
      
        showThumbs: ('showThumbs', true, tooglesGroupId),
        useKeyboardArrows: ('useKeyboardArrows', true, tooglesGroupId),
        autoPlay: ('autoPlay', false, tooglesGroupId),
        stopOnHover: ('stopOnHover', false, tooglesGroupId),
        swipeable: ('swipeable', true, tooglesGroupId),
        dynamicHeight: ('dynamicHeight', true, tooglesGroupId),
        emulateTouch: ('emulateTouch', true, tooglesGroupId),
        autoFocus: ('autoFocus', true, tooglesGroupId),
        thumbWidth: ('thumbWidth', 100, {}, valuesGroupId),
        selectedItem: ('selectedItem', 0, {}, valuesGroupId),
        interval: ('interval', 2000, {}, valuesGroupId),
        transitionTime: ('transitionTime', 0, {}, valuesGroupId),
        swipeScrollTolerance: ('swipeScrollTolerance', 5, {}, valuesGroupId),
        ariaLabel: ('ariaLabel', undefined),
    });

    const handleImg =()=>{

        window.open('../part/3-91155.html', '_blank')

      
       
    }
    return (
        <>
        <Carousel 
 
       /* {...getConfigurableProps()} */
        >{/* {baseChildren.props.children} */}
                <div >
                    <img alt='piture' className="container-img" src={require(`../images/3-91659.jpg`)} />
                    <p className="legend">Picture</p>
                </div>
                <div>
                    <img alt='3D' className="container-img" src={require(`../images/3-3891.jpg`)} />
                   
                    <a  href='#' target='_blank' rel="noreferrer">
                        <p className="legend">3D</p></a>
                        
                    
                </div>
                <div>
                    <img className="container-img" src={require(`../images/pdf1.jpg`)} onClick={ handleImg} />
                    
                    <a href={prueba1} target='_blank' rel="noreferrer">
                        <p className="legend">Drawing</p></a>
                </div>
                <div>
                    <img className="container-img" src={require(`../images/3-3891.jpg`)} onClick={ handleImg} />
                    <a href={prueba1} target='_blank' rel="noreferrer">
                        <p className="legend">Router</p></a>
                </div>
            </Carousel>
        
        </>
    )
}

export default CarouselImg;