import swimming from '../../assets/swimming.png';
import spatula from '../../assets/spatula.png';
import grill from '../../assets/grill.png';
import parking from '../../assets/parking.png';
import slider from '../../assets/slider.png';
import fountain from '../../assets/fountain.png';
import steamroom from '../../assets/steam-room.png';
import bed from '../../assets/bed.png';

import image from '../../assets/apresentacao.jpeg';

import './styles.css';

export function Presentation() {
  return (
    <div className="container" style={{ marginTop: 64 }}>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h3 style={{ fontWeight: 'bold' }}>BELEZA, PAZ, TRANQUILIDADE E ESTRUTURA</h3>
          <div>
            Além de um ótimo lugar de lazer e descanso, a estrutura é planejada para receber 
            com excelência e flexibilidade os mais diversificados eventos, como: casamentos, 
            formaturas, aniversários, eventos empresariais, confraternizações, entre outros.  
          </div>
          <div className="row" style={{ marginTop: 16 }}>
            <div className="col-6">
              <Item src={swimming} text="Piscina" />
              <Item src={grill} text="Área da Churrasqueira" />
              <Item src={steamroom} text="Sauna" />
              <Item src={slider} text="Playground" />
            </div>

            <div className="col-6">
              <Item src={fountain} text="Chafariz" />
              <Item src={bed} text="10 Quartos" />
              <Item src={spatula} text="Cozinha" />
              <Item src={parking} text="Estacionamento" />
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-12">
          <img
            className="rounded img-fluid"
            style={{ width: '100%', maxHeight: 500, objectFit: 'cover', objectPosition: 'center' }}
            src={image}
            alt="Imagem de apresentação" />
        </div>
      </div>
    </div>
  );
}

interface ItemProps {
  src: string;
  text: string;
}

function Item(props: ItemProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', columnGap: 8, marginBottom: 16 }}>
      <img style={{ width: 35, height: 'auto' }} src={props.src}></img>
      <div style={{ fontWeight: 'bold' }}>{props.text}</div>
    </div>
  )
}