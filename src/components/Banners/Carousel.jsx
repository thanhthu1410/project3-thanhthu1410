import React from 'react'
export default function Drink() {
  return (
    <>
      <div className="drinkbg inner">
        <div className="wrap text-xs-center">
          <div className="titlebox text-xs-left">
            <h5 className="fz-h4 title-sub wow fadeInDown">KOI Thé</h5>
            <h1 className="fz-h1 txttitle wow fadeInDown" data-wow-delay=".5s">
              DRINK
            </h1>
          </div>
        </div>
        <div className="wrap wrap-sm-up">
          <div className="h-accordion scrollbar-rail">
            <div className="h-group">
              <div
                className="h-item active"
                style={{
                  backgroundImage:
                    "url(https://koithe.com/uploads/products/59cf046c0efcc.png)"
                }}
              >
                <div className="item-hero">
                  <img
                    className="col item-icon"
                    src="https://koithe.com/cache/50/60/uploads-product_terms-59cf071bc493c.png"
                    alt="黃金珍奶"
                  />
                  <h5 className="col txttitle">
                    黃金珍奶<span className="txtsub">奶香伴隨，滑溜Q彈</span>
                  </h5>
                </div>
              </div>
              <div className="h-info open">
                <div className="txtbox">
                  <img
                    className="dec-bg"
                    src="https://koithe.com/frontend/images/dec-bg.png"
                    alt=""
                  />
                  <h4 className="koititle fw-bold maBxs5 maBsm10">
                    黃金珍奶
                    <span className="icon-leaf" />
                  </h4>
                  <p
                    className="mcusscroll fz-default fc-W"
                    data-mcs-theme="my-theme"
                  >
                    特選「阿薩姆紅茶」為湯底與香醇濃郁奶香融合，加入圓潤飽滿、滑溜Q彈的「黃金珍珠」，奶香與茶香伴隨著彈牙有嚼勁的黃金珍珠。
                  </p>
                </div>
              </div>
            </div>
            <div className="h-group">
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
                    紅茶瑪奇朵
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
                    抹茶拿鐵
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
          </div>
        </div>
      </div>
    </>
  )
}
