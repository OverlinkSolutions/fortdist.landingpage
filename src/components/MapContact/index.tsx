import { ButtonContact } from "../ButtonContact";

export function MapContact() {
  return (
    <div
      className="container"
      id="localizacao"
      style={{ marginTop: 64, marginBottom: 64, overflow: "hidden" }}
    >
      <h3 style={{ fontWeight: "bold" }}>Venha nos visitar</h3>
      <div className="row">
        <div className="col-md-4 pr-2">
          <div style={{ fontSize: 11.11 }}>NOSSO ENDEREÇO</div>
          <div>
            Avenida Otoniel Dória, 521 - Centro, Itabaiana SE, 49500-000
            <br />
            <a href="tel:79999614009">(79) 99961-4009</a>
            <br />
          </div>
          <ButtonContact />
        </div>
        <div className="col-md-8">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                title="Localizacão da nossa loja"
                className="gmap_iframe"
                height={350}
                width="100%"
                frameBorder="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=1025&amp;height=600&amp;hl=en&amp;q=Av. Otoniel Doria 521 Itabaiana SE &amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
