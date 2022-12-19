import img1 from "../../assets/card1.jpeg";
import img2 from "../../assets/card2.jpeg";
import img3 from "../../assets/card3.jpeg";
import img4 from "../../assets/card4.jpeg";

import './styles.css';

export function Cards() {
  return (
    <div className="container" style={{ marginTop: 64 }}>
      <div className="row g-3">
        <div className="col-md-3 col-sm-6 col-6">
          <Card
            src={img1}
          />
        </div>
        <div className="col-md-3 col-sm-6 col-6">
          <Card
            src={img2}
          />
        </div>
        <div className="col-md-3 col-sm-6 col-6">
          <Card
            src={img3}
          />
        </div>
        <div className="col-md-3 col-sm-6 col-6">
          <Card
            src={img4}
          />
        </div>
      </div>
    </div>
  );
}

interface CardProps {
  src?: string;
  text?: string;
  color?: string;
}

function Card({ src, text, color }: CardProps) {
  return (
    <div className="card grow" style={{ backgroundColor: color, overflow: 'hidden' }}>
      <img
        src={src}
        className="img-fluid rounded"
        style={{ width: '100%', height: 400, objectFit: 'cover', objectPosition: 'center' }}
        alt="..."
      />
      <div style={{ 
        WebkitBackdropFilter: 'saturate(180%) blur(5px)',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backdropFilter: 'blur(5px)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
        <div className="card-body">
          <h5 className="card-title">aaaa</h5>
        </div>
      </div>
    </div>
  );
}