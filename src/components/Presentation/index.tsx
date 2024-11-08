import image from "../../assets/presentation.png";

import "./styles.css";

export function Presentation() {
  return (
    <div className="container" style={{ marginTop: 64 }}>
      <div className="row g-4">
        <div className="col-md-6 col-sm-12 d-flex flex-column align-items-center justify-content-center ">
          <h3 className="title">
            A melhor distribuidora do nordeste!
          </h3>
          <div className="description">
            Na Fort Distribuidora, oferecemos uma linha completa de materiais de
            construção para atender suas necessidades, desde pequenas reformas
            até grandes obras. Garantimos que você receba o que precisa, quando
            e onde for necessário.
          </div>
        </div>

        <div className="col-md-6 col-sm-12">
          <img
            className="rounded img-fluid"
            style={{
              width: "100%",
              maxHeight: 350,
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
