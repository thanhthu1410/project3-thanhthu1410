import React, { useEffect } from 'react'
import "./Banner.scss"


export default function Carousel() {

  return (
    <>
      <div className="hero ab-intro" style={{ marginTop: "-140px" }}>
        <div className="redteabox">
          <div className="redtea" />
        </div>
        <div className="wrap">
          <div className="txtbox">
            <div className="titlebox paBxs15 paBsm20">

              <h2 style={{fontSize:"70px",color:"#fff"}}> Gong.Cha</h2>
            </div>
            <h4
              className="koititle fw-bold paTBxs20 paTBsm30 paTB40 wow fadeInUp"
              data-wow-delay=".7s"
            >
              Original Tea
            </h4>
            <p className="fz-default fc-W wow fadeInUp" data-wow-delay=".9s">
               Our original teas are made with high-quality tea leaves that are brewed to perfection so you’ll want to sit and savor your selection.
              <br />
              <br />
              We choose only the best leaves and spend the perfect amount of time brewing our tea for the ideal taste and aroma. 
              <br />
              <br />
              Our signature Black tea has a rich flavor that goes perfectly with milk. Our Oolong tea is a warm and enticing option that goes well with brown sugar. 
              <br />
              <br />
              Or try our aromatic Jasmine Green tea, Earl Grey tea, or Alisan tea.
            </p>
          </div>
        </div>
      </div>
      <div className="drinkbg inner">
        <div className="wrap text-xs-center">
          <div className="titlebox text-xs-left">
            <h5 className="fz-h4 title-sub wow fadeInDown">Gong.Cha</h5>
            <h1 className="fz-h1 txttitle wow fadeInDown" data-wow-delay=".5s">
              DRINK
            </h1>
          </div>
        </div>
        <div className="wrap wrap-sm-up" style={{ marginTop: "-110px" }}>
          <div className="h-accordion scrollbar-rail">

            <div className="h-group" >
              <div
                className="h-item "
                style={{
                  backgroundImage:
                    "url(https://koithe.com/uploads/products/59cf02bf0cc72.png)"
                }}
              >
                <div className="item-hero">
                  <img
                    className="col item-icon"
                    src="https://koithe.com/cache/50/60/uploads-product_terms-59cf0b80e0447.png"
                    alt="紅茶瑪奇朵"
                  />
                  <h5 className="col txttitle">
                  Tea Macchiato
                    <span className="txtsub" />
                  </h5>
                </div>
              </div>
              <div className="h-info ">
                <div className="txtbox">
                  <img
                    className="dec-bg"
                    src="https://koithe.com/frontend/images/dec-bg.png"
                    alt=""
                  />
                  <h4 className="koititle fw-bold maBxs5 maBsm10">
                    紅茶瑪奇朵
                    <span className="icon-leaf" />
                  </h4>
                  <p
                    className="mcusscroll fz-default fc-W"
                    data-mcs-theme="my-theme"
                  >
                    以香氣清爽的「阿薩姆紅茶」為湯底，淋上每日現打鮮奶油特調而成的濃郁奶蓋，綿密滑順，一口茶一口奶香，協調相融，雙層滋味。
                  </p>
                </div>
              </div>
            </div>
            <div className="h-group">
              <div
                className="h-item "
                style={{
                  backgroundImage:
                    "url(https://koithe.com/uploads/products/59cf27e7e8da2.png)"
                }}
              >
                <div className="item-hero">
                  <img
                    className="col item-icon"
                    src="https://koithe.com/cache/50/60/uploads-product_terms-59cf0ba0c6112.png"
                    alt="抹茶拿鐵"
                  />
                  <h5 className="col txttitle">
                    Matcha Latte
                    <span className="txtsub" />
                  </h5>
                </div>
              </div>
              <div className="h-info ">
                <div className="txtbox">
                  <img
                    className="dec-bg"
                    src="https://koithe.com/frontend/images/dec-bg.png"
                    alt=""
                  />
                  <h4 className="koititle fw-bold maBxs5 maBsm10">
                    抹茶拿鐵
                    <span className="icon-leaf" />
                  </h4>
                  <p
                    className="mcusscroll fz-default fc-W"
                    data-mcs-theme="my-theme"
                  >
                    特選日本新鮮嫩芽採摘研磨而成的抹茶，來自優質牧場提供的純淨鮮奶，呈現出雙色分明的幸福感。
                  </p>
                </div>
              </div>
            </div>
            <div className="h-group">
              <div
                className="h-item "
                style={{
                  backgroundImage:
                    "url(https://koithe.com/uploads/products/59cf27b3d7cde.png)"
                }}
              >
                <div className="item-hero">
                  <img
                    className="col item-icon"
                    src="https://koithe.com/cache/50/60/uploads-product_terms-59cf071bc493c.png"
                    alt="芋圓奶茶"
                  />
                  <h5 className="col txttitle">
                  Milk Tea
                    <span className="txtsub" />
                  </h5>
                </div>
              </div>
              <div className="h-info ">
                <div className="txtbox">
                  <img
                    className="dec-bg"
                    src="https://koithe.com/frontend/images/dec-bg.png"
                    alt=""
                  />
                  <h4 className="koititle fw-bold maBxs5 maBsm10">
                    芋圓奶茶
                    <span className="icon-leaf" />
                  </h4>
                  <p
                    className="mcusscroll fz-default fc-W"
                    data-mcs-theme="my-theme"
                  >
                    濃郁的在地國產芋頭製作而成的Q彈小芋圓，沖入帶著微微紅茶香的香濃奶茶，給予意想不到的新風味。
                  </p>
                </div>
              </div>
            </div>
            <div className="h-group">
              <div
                className="h-item "
                style={{
                  backgroundImage:
                    "url(https://koithe.com/uploads/products/59cf2960ae59e.png)"
                }}
              >
                <div className="item-hero">
                  <img
                    className="col item-icon"
                    src="https://koithe.com/cache/50/60/uploads-product_terms-59d372ec88ae2.png"
                    alt="養樂多綠茶"
                  />
                  <h5 className="col txttitle">
                Juice
                    <span className="txtsub" />
                  </h5>
                </div>
              </div>
              <div className="h-info ">
                <div className="txtbox">
                  <img
                    className="dec-bg"
                    src="https://koithe.com/frontend/images/dec-bg.png"
                    alt=""
                  />
                  <h4 className="koititle fw-bold maBxs5 maBsm10">
                    養樂多綠茶
                    <span className="icon-leaf" />
                  </h4>
                  <p
                    className="mcusscroll fz-default fc-W"
                    data-mcs-theme="my-theme"
                  >
                    新綠清香的茉莉綠茶，加入酸甜香濃的養樂多，與綠茶的清新香氣完美融合在一起，完美比例調製出可口誘人的好滋味。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
