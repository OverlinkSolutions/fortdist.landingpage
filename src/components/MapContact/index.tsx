import { ButtonContact } from "../ButtonContact";

export function MapContact() {
  return (
    <div className="container"style={{ marginTop: 64, marginBottom: 64, overflow: 'hidden' }}>
      <div className="row">
        <div className="col-md-4 pr-2">
          <h4 style={{ fontWeight: 'bold' }}>Entre em contato</h4>
          <div style={{ fontSize: 11.11, color: 'white' }}>
            NOSSO ENDEREÇO
          </div>
          <p>
            <strong>Endereço:</strong> Rodovia SE 255 KM 05, 49100-000
            <br />
            <strong>Telefone: </strong>
            <a href="tel:79999683408">(79) 99968-3408</a>
            <br />
          </p>
          <ButtonContact />
        </div>
        <div className="col-md-8">

        </div>
      </div>

    </div>
  );
}