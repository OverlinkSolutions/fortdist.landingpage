import instagram from '../../assets/instagram.png';
import map_mark from '../../assets/map_mark.png';
import phone from '../../assets/phone.png';
import Logo from '../../assets/logo.png';

export function Footer() {
  return (
    <div className="footer" style={{ color: 'white', width: '100%', backgroundColor: '#000151', padding: '32px 0px' }}>
      <div className="container">
        <div className="row">
            <div>
              <img src={Logo} height='33' alt="Fazenda Modelo Logo" />
            </div>
          <div className="col-md-4 col-sm-12">
            <h5>Contato</h5>
            <p>
              <img src={map_mark} alt="#" width={25} /> Avenida Otoniel Dória, 521 - Centro, Itabaiana SE, 49500-000
            </p>
            <p>
              <img src={phone} alt="#" width={25} /> <a href="tel:79999683408" style={{ color: 'white' }}>(79) 99968-3408</a>
            </p>
          </div>
          <div className="col-md-4 col-sm-12">
            <h5>Redes Sociais</h5>
            <p>
              <a href="https://www.instagram.com/alugue_fazendamodelo/">
                <img src={instagram} alt="#" width={30} />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}