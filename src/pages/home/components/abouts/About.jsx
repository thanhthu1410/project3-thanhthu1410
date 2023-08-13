
import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "antd";
import "./About.scss";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Banner() {
    useEffect(() => {
        // Khởi tạo thư viện AOS
        AOS.init();
    }, []);
    const slider = useRef();
    const [banners, setBanners] = useState([
        {
            id: 1,
            url: "../../images/carousel/carousel1.jpg"

        },
        {
            id: 2,
            url: "../../images/carousel/carousel2.jpg"

        },
        {
            id: 3,
            url: "../../images/carousel/carousel3.png"

        },
    ]);

    return (
        <>
            <Carousel
                ref={slider}
                autoplay
                autoplaySpeed={2000}
                effect={"fade"}
                dots={true}
                dotPosition={"bottom"}
                waitForAnimate={"true"}
            >
                {banners.map((banner, index) => (
                    <div className="items" key={banner.id + index}>
                        <img style={{ width: "100%", height: "650px" }} className="items-img" src={banner.url} />

                    </div>
                ))}
            </Carousel>
            <div className="about_container" style={{ backgroundColor: "#fff" }}>
                <div className="about_content" data-aos="fade-right" data-aos-delay="300">
                    <div className="about_content_item">
                        <div className="about_detail_content" data-aos="fade-right" data-aos-delay="350">
                           <p> 🍓Strawbery Choco Cookie Smoothie</p>
                            <p>🍓Strawberry Cookie Milk Tea </p>
                            <p>🍓Strawberry Milk Tea</p>
                        </div>
                        <p data-aos="fade-right" data-aos-delay="300">👉Let Gong Cha add some sweetness to your love story this August with 3 drinks from the brand new Strawberry!</p>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-delay="350">
                    <img src="../../images/carousel/new1.jpg" alt="" />
                </div>

            </div>
            <div className="about_container" style={{ backgroundColor: "#fff" }} data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <div data-aos="fade-right" data-aos-delay="200">
                    <img src="../../images/carousel/new2.jpg" alt="" />
                </div>
                <div className="about_content" data-aos="fade-left" data-aos-delay="200">
                    <div className="about_content_item">
                        <h4>   👉Gong Cha launches 3 Croffle products combined with a coffee line to bring you the perfect breakfast.</h4> <br />
                        <div className="about_detail_content" data-aos="fade-left" data-aos-delay="200">
                           <p>📌 Note: </p>  
                          <p>- Valid from 10/08/2023</p>   
                         <p>   - Applicable when buying directly at the store or ordering through ShopeeFood, GrabFood, Baemin and Gojek delivery apps</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
