
export function Footer() {
  return (
    <div className="footer" style={{ backgroundColor: '#231C14', padding: '32px 0px' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <h5>Contato</h5>
            <p>
              <i className="fa fa-map-marker"></i> Rua dos Bobos, nº 0
            </p>
            <p>
              <i className="fa fa-phone"></i> (00) 00000-0000
            </p>
            <p>
              <i className="fa fa-envelope"></i>
              <a href="mailto:"></a>
            </p>
          </div>
          <div className="col-md-4 col-sm-12">
            <h5>Horário de Funcionamento</h5>
            <p>
              <i className="fa fa-clock-o"></i> Segunda - Sexta: 8:00 - 18:00
            </p>
            <p>
              <i className="fa fa-clock-o"></i> Sábado: 8:00 - 12:00
            </p>
            <p>
              <i className="fa fa-clock-o"></i> Domingo: Fechado
            </p>
          </div>
          <div className="col-md-4 col-sm-12">
            <h5>Redes Sociais</h5>
            <p>
              <i className="fa fa-facebook"></i>
              <a href="https://www.facebook.com/"></a>
            </p>
            <p>
              <i className="fa fa-instagram"></i>
              <a href="https://www.instagram.com/"></a>
            </p>
            <p>
              <i className="fa fa-twitter"></i>
              <a href="https://twitter.com/"></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}