import React from 'react'
import ImageSlider from './ImageSlider'
import './home.css'
export default function Home() {
  return (
    <div className='whole'>
      

      <div className="blockquote-wrapper">
        <div className="blockquote">
          <h2>
            ❝Where Dreaming Big Becomes Reality❞
            <p className='pClass'><br />Easy-to-use digital raffle platform for <strong>Canadian</strong> charitites, schools, community groups, sporting clubs, and other non-profit organizations.</p>
          </h2>

          <h4>&mdash; Raffle<span>Box</span></h4>
        </div>
      </div>
     
      <ImageSlider />
    
    </div>
  )
}



