import React from 'react';

function Navbar({size, setshow}) {
  return (
    <nav  class="navbar navbar-dark bg-dark">
    <div className='navbar1' >
        <span className='shopping' onClick={()=>setshow(true)}>
            Shopping App
        </span>
        <div className='cart' onClick={()=>setshow(false)}>
            <span className='icon'>
            <i class="fa fa-shopping-cart" >
                {size}
            </i>          
            </span>                   
        </div>        
    </div>
    
    </nav>

  )
}

export default Navbar