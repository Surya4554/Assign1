import React from 'react';
import './style.css';

const Details = () => {
    const Item = [
        { id:1 , title: "Order Online", icon: "fas fa-clipboard-check option-color" },
        { id:2 , title: "No Delivery", icon: "fas fa-clipboard-check option-color" }, 
        { id:3 , title: "On the move", icon: "fas fa-clipboard-check option-color" },
        { id:4 , title: "Appointment", icon: "fas fa-clipboard-check option-color" }
    ]
    const ItemList = [
        { id:1 , title: "Follow", icon: "fas fa-clipboard-check follow-color" },
        { id:2 , title: "Share", icon: "fas fa-clipboard-check follow-color" }, 
        { id:3 , title: "Offres", icon: "fas fa-clipboard-check follow-color" },
    ]
  return (
    <div className='detail-cont bg-color'>
         <div className='detail-img-cont'>
              <div> <i className="fas fa-chevron-left arrow"></i> <i className="fas fa-star star">4.3</i> </div>
              <div className='shop-name'> <h2>Iluvia bakery <span> <i className="fas fa-clipboard-check shop-check"></i> </span> </h2>
                    <div> <i class="fas fa-circle shop-open"></i> <span>Open</span> <i class="fas fa-map-pin shop-map"></i> <span>2.3 Km</span> </div>
              </div>
         </div>
         <div className='detail-option'>
              {Item.map(curElem =>{
                  return <div>
                       <span> <i className={curElem.icon}> </i> <span className='option-title'> {curElem.title} </span> </span>
                  </div>
              })}
         </div>
         <div className='follow-option'>
             {ItemList.map(Elem =>{
                 return <span><i className={Elem.icon} > </i> <span className='option-title option-border'>{Elem.title}</span></span>
             })}
         </div>
         <div className='boni-coin'>
             <i className="fas fa-clipboard-check"></i> <span> You have Rs 40 Boni coins</span>
         </div>
    </div>
  )
}

export default Details;
