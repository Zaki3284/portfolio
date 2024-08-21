import React, { useState } from 'react';
import './header.css'
export default function Header() {
const [showmodel, setshowmodel] = useState(false); 
 return (
    <header  className='flex'>
       <button onClick={() => {setshowmodel(true)}} className='menu icon-menu flex'></button>
         <div></div>
      <nav>
        <ul className='flex'>
          <li><a href="">About</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Speaking</a></li>
          <li><a href="">Contact</a></li>
        </ul>
        
      </nav>

      <button className='mode felx'>
        <span className='icon-brightness-contrast'></span>
      </button>

{ showmodel && (
        <div className="fixed">
        <ul className='model'>
          <li>
          <button onClick={() => {setshowmodel(false)}} className='icon-cross'></button>
          </li>
         <li><a href="">About</a></li>
         <li><a href="">Articles</a></li>
         <li><a href="">Projects</a></li>
         <li><a href="">Speaking</a></li>
         <li><a href="">Contact</a></li>
        </ul>
       </div>
)}
    </header>
  )
}
