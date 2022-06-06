import React from 'react'

const Recommended = () => {
  return (
    <div className='bg-color'>
         <div className='menu-cont'>
             <span className='menu'>Menu</span> <span className='about'>About</span>
         </div>
         <div className='search-box'>
            <i class="fa fa-search"></i>
            <input type="text" placeholder="Search" name="search" />
         </div>
         <div className='recom-cont'>
            <h3>Recommended (6)</h3>
            <div className='recom-img'>
               <div className='img-div'> <img src='./images/back1.jpg' alt='Img' /> </div>
               <div className='recom-text'> <h3>Blueberry Almond Cookies</h3> <span>₹ 169.00 (100gm) </span> </div>
               <div className='add-div'> <h4>+ Add</h4> </div>
            </div>
            <div className='recom-img recom-second-img'>
               <div className='img-div'> <img src='./images/back1.jpg' alt='Img' /> </div>
               <div className='recom-text'> <h3>Death by chocolate special</h3> <span>₹ 1200.00 (1Kg) </span> </div>
               <div className='minus-div'> <h4> <span className='minus'>-</span> <span className='minus-text'>01</span><span className='minus'>+</span> </h4> </div>
            </div>
            <div className='browse'> <i class="fas fa-align-justify"> Browse</i> </div>
         </div>
         <div className='cart-div'>
           <div className='left-cart'> <h5>1 ITEM</h5> <h3>₹     1200.00</h3> </div>
           <div className='right-cart'><h3>VIEW CART</h3></div>
         </div>
    </div>
  )
}

export default Recommended;
