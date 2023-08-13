import React from 'react'
import "./FindStore.scss"
export default function FindStore() {
  return (
    <div className='container_find'>
        <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62710.382357345596!2d106.58231417204122!3d10.780729400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f57e58111c7%3A0xd5c295dc665ebebd!2zR29uZyBDaGEgTmd1eeG7hW4gU8ahbg!5e0!3m2!1svi!2s!4v1691943127951!5m2!1svi!2s" 
       style={{border: "0px", width:"100%",height : "550px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
        </div>
        <div className='address'>
        <h4>Gong Cha Nguyễn Sơn</h4>
        <p >7 Nguyễn Sơn, Phú Thạnh, Tân Phú, Thành phố Hồ Chí Minh</p>
        </div>
    </div>
  )
}
