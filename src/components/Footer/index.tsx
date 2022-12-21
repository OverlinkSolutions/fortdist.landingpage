import instagram from '../../assets/instagram.png';
import map_mark from '../../assets/map_mark.png';
import phone from '../../assets/phone.png';
import Logo from '../../assets/logo_horizontal.png';

export function Footer() {
  return (
    <div className="footer" style={{ backgroundColor: '#231C14', padding: '32px 0px' }}>
      <div className="container">
        <div className="row">
            <div>
              <img src={Logo} height='33' alt="Fazenda Modelo Logo" />
            </div>
          <div className="col-md-4 col-sm-12">
            <h5>Contato</h5>
            <p>
              <img src={map_mark} width={25} /> Rodovia SE 255 KM 05, 49100-000
            </p>
            <p>
              <img src={phone} width={25} /> <a href="tel:79999683408" style={{ color: 'white' }}>(79) 99968-3408</a>
            </p>
          </div>
          <div className="col-md-4 col-sm-12">
            <h5>Redes Sociais</h5>
            <p>
              <a href="https://www.instagram.com/alugue_fazendamodelo/">
                <img src={instagram} width={30} />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}