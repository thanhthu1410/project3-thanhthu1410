import React, { useEffect } from 'react'
import "./Direction.scss"
import AOS from "aos";
import "aos/dist/aos.css";
export default function Direction() {
    useEffect(() => {
        // Khởi tạo thư viện AOS
        AOS.init();
    }, []);
    return (
        <div className='container_direc'>
            <div className='title_direc'>
                <img src="../../images/title.jpg" alt="" />
            </div>
            <div className='content_direc'>
                <div className='direc_item'>
                    <div className='direc_item_left' data-aos="fade-right" data-aos-delay="300">
                       <div>
                            <h4>STEP 1:</h4>
                            <h4>CHOOSE YOUR DRINK</h4>
                       </div>
                    </div>
                    <div className='direc_item_rigth' data-aos="fade-left" data-aos-delay="300">
                            <img src="https://gongcha.com.vn/wp-content/themes/theme/images/buoc1.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className='content_direc'>
                <div className='direc_item'>
                    <div className='direc_item_left'  data-aos="fade-right" data-aos-delay="350">
                       <div>
                            <h4>STEP 2:</h4>
                            <h4>CHOOSE CUP SIZE</h4>
                       </div>
                    </div>
                    <div className='direc_item_rigth' data-aos="fade-left" data-aos-delay="350">
                            <img src="https://gongcha.com.vn/wp-content/themes/theme/images/buoc2.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className='content_direc'>
                <div className='direc_item'>
                    <div className='direc_item_left' data-aos="fade-right" data-aos-delay="400">
                       <div>
                            <h4>STEP 3:</h4>
                            <h4> CHOOSE SUGAR LEVEL</h4>
                       </div>
                    </div>
                    <div className='direc_item_rigth' data-aos="fade-left" data-aos-delay="400">
                            <img src="https://gongcha.com.vn/wp-content/themes/theme/images/buoc3.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className='content_direc'>
                <div className='direc_item'>
                    <div className='direc_item_left' data-aos="fade-right" data-aos-delay="200">
                       <div>
                            <h4>STEP 4:</h4>
                            <h4> CHOOSE ICE LEVEL</h4>
                       </div>
                    </div>
                    <div className='direc_item_rigth'data-aos="fade-left" data-aos-delay="200">
                            <img src="https://gongcha.com.vn/wp-content/themes/theme/images/buoc4.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div className='content_direc'data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <div className='direc_item'>
                    <div className='direc_item_left' data-aos="fade-right" data-aos-delay="250" >
                       <div>
                            <h4>STEP 5:</h4>
                            <h4> CHOOSE TOPPING</h4>
                       </div>
                    </div>
                    <div className='direc_item_rigth' data-aos="fade-left" data-aos-delay="250">
                            <img src="https://gongcha.com.vn/wp-content/themes/theme/images/buoc5.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div className='content_direc' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <div className='direc_item'>
                    <div className='direc_item_left' data-aos="fade-right" data-aos-delay="300">
                       <div>
                            <h4>STEP 6:</h4>
                            <h4>ENJOY!</h4>
                       </div>
                    </div>
                    <div className='direc_item_rigth' data-aos="fade-left" data-aos-delay="300">
                            <img src="https://gongcha.com.vn/wp-content/themes/theme/images/buoc6.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
