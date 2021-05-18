import React from "react";
import ReactDom from 'react-dom'

export default function Navbar() {
    
    window.addEventListener('scroll',function (){
      if (window.scrollY > 100) {
        const nav = document.querySelector('.navbar-container')
        ReactDom.findDOMNode(nav).classList.add('democlass')
      }else{
        const nav2 = document.querySelector('.navbar-container')
        ReactDom.findDOMNode(nav2).classList.remove('democlass')
      }
    })

  return (
    <>
      <div className='navbar-container' >
        <img 
         src="https://www.voice-online.co.uk/wp-content/uploads/2020/04/df87ee0c-c4ea-11e7-8d40-066b49664af6_cm_800w.png" 
         alt='logo'
         width="100px" 
        />
        <img 
         src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" 
         alt='err' 
         width='30px'
        />
      </div>
    </>
  );
}
