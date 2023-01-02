import './styles.css';
import star from '../../assets/star.png';

export function Recomendations() {
  return (
    <div id="recomendations" className="external-container">
      <div className="container">
        <h4 style={{ fontWeight: 'bold', marginBottom: 24 }}>O que nossos clientes dizem</h4>
        <div className="row">
          <SingleRecomendation
            author="Maria da Conceição"
            text="É uma fazenda ótima pra quem procura descansar!" />
          <SingleRecomendation
            author="Aurélio Montalvão"
            text="Excelentes acomodações! Local Lindo!" />
          <SingleRecomendation
            author="Danilo Santos"
            text="Bastante cômodos e com espaço excelente para festas." />
        </div>
      </div>
    </div>
  );
}

interface RecomendationProps {
  text: string;
  author: string;
}

function SingleRecomendation(props: RecomendationProps) {
  return (
    <div className="col-md-4 col-sm-12">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FiveStars />
      </div>
      <div>
        <h6 style={{ fontWeight: 'bold', textAlign: 'center' }}>
          "{props.text}"
        </h6>
        <div style={{ textAlign: 'center' }}>
          {props.author}
        </div>
      </div>
    </div>
  );
}

function FiveStars() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', columnGap: 0, margin: '16px 0 8px 0' }}>
      <img style={{ width: 25, height: 'auto' }} alt="Estrela" src={star}></img>
      <img style={{ width: 25, height: 'auto' }} alt="Estrela" src={star}></img>
      <img style={{ width: 25, height: 'auto' }} alt="Estrela" src={star}></img>
      <img style={{ width: 25, height: 'auto' }} alt="Estrela" src={star}></img>
      <img style={{ width: 25, height: 'auto' }} alt="Estrela" src={star}></img>
    </div>
  );
}