import One from "../../assets/partners/1.png";
import Two from "../../assets/partners/2.png";
import Three from "../../assets/partners/3.png";
import Four from "../../assets/partners/4.png";
import Five from "../../assets/partners/5.png";
import Six from "../../assets/partners/6.png";
import Seven from "../../assets/partners/7.png";
import Eight from "../../assets/partners/8.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";

export default function Brands() {
  return (
    <div className="container" id="marcas" style={{ marginTop: 64 }}>
      <h3 style={{ fontWeight: "bold" }}>Marcas que trabalhamos</h3>
      <Carousel
        autoPlay
        infiniteLoop
        showArrows
        showIndicators={true}
        interval={2500}
        swipeable
        showStatus={false}
      >
        <div className="row g-4">
          <div className="col-6 col-md-3">
            <div style={{ padding: 20 }}>
              <img className="w-100 " src={One}></img>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div style={{ padding: 20 }}>
              <img className="w-100" src={Two}></img>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div style={{ padding: 20 }}>
              <img className="w-100" src={Three}></img>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div style={{ padding: 20 }}>
              <img className="w-100" src={Four}></img>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-6 col-md-3">
            <div style={{ padding: 20 }}>
              <img className="w-100" src={Five}></img>
            </div>
          </div>
          <div className="col-6 col-md-3 ">
            <div style={{ padding: 20 }}>
              <img className="w-100" src={Six}></img>
            </div>
          </div>
          <div className="col-6 col-md-3 ">
            <div style={{ padding: 20 }}>
              <img className="w-100" src={Seven}></img>
            </div>
          </div>
          <div className="col-6 col-md-3 ">
            <div style={{ padding: 20 }}>
              <img className="w-100" src={Eight}></img>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
