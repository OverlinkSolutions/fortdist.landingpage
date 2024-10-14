import image from "../../assets/presentation.png";

import "./styles.css";

export function Presentation() {
  return (
    <div className="container" style={{ marginTop: 64 }}>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h3 style={{ fontWeight: "bold" }}>
            A melhor distribuidora do nordeste!
          </h3>
          <div>
            Na Fort Distribuidora, oferecemos uma linha completa de materiais de
            construção para atender suas necessidades, desde pequenas reformas
            até grandes obras. Garantimos que você receba o que precisa, quando
            e onde for necessário.
          </div>
          <div className="row" style={{ marginTop: 16 }}>
            <div className="col-6">
              {/* <Item src={swimming} text="Piscina" />
              <Item src={grill} text="Área da Churrasqueira" />
              <Item src={steamroom} text="Sauna" />
              <Item src={slider} text="Playground" /> */}
            </div>

            <div className="col-6">
              {/* <Item src={fountain} text="Chafariz" />
              <Item src={bed} text="10 Quartos" />
              <Item src={spatula} text="Cozinha" />
              <Item src={parking} text="Estacionamento" /> */}
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-12">
          <img
            className="rounded img-fluid"
            style={{
              width: "100%",
              maxHeight: 500,
              objectFit: "cover",
              objectPosition: "center",
            }}
            src={image}
            alt="Imagem de apresentação"
          />
        </div>
      </div>
    </div>
  );
}
