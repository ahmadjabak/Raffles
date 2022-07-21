import React, {useState, useEffect} from 'react'

import './ImageSlider.css';

 const SliderData = [
    {
        image: 'https://images.unsplash.com/photo-1623068285726-21b0fcabe7f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    }, {
        image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    }, {
        image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    }
  ]
  const ImageSlider = ({ slides }) => {
        
    const [currentSlide, setCurrentSlide] = useState(0)
    const slideLength = SliderData.length;
  
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 6000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
      };
    
      const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
      };
    
      function auto() {
        slideInterval = setInterval(nextSlide, intervalTime)
      }
    
      useEffect(() => {
        setCurrentSlide(0)
      }, [])
    
      useEffect(() => {
        if (autoScroll) {
          auto()
        }
         return () => clearInterval(slideInterval)
      }, [currentSlide])

    
        
      return (
      
        <div className='containerr'>
    
          {SliderData.map((slide, index) => {
            return (
              <div >
                {index === currentSlide && (
                  <img className='the_image' src={slide.image} alt='slide' ></img>
                 )}
              </div>
            )
    
          })}
          <div className='the_buttons'>
          <button onClick={nextSlide}>NEXT</button>
          <button onClick={prevSlide}>BACK</button>
          </div>
        </div>
    
      );
     };
    
    export default ImageSlider;
