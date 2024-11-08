import whatsapp from "../../assets/whatsapp.png";
import "./styles.css";

const items = [
  {
    thumb: "avant",
    name: "Avant",
  },
  {
    thumb: "dryko",
    name: "Dryko",
  },
  {
    thumb: "herc",
    name: "Herc",
  },
  {
    thumb: "hidrotintas",
    name: "Hidrotintas",
  },
  {
    thumb: "krona",
    name: "Krona",
  },
  {
    thumb: "soqualidade",
    name: "Só Qualidade",
  },
];

function importAll(r: any) {
  let images: any = {};
  r.keys().map((item: any, index: any) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}

const images = importAll(
  (require as any).context("../../assets/products/", false, /\.(png)$/)
);

export function Cards() {
  return (
    <div className="container" id="produtos" style={{ marginTop: 64 }}>
      <h3 style={{ fontWeight: "bold" }}>
        Produtos em destaque!
      </h3>
      <div className="row">
        {items.map((item, index) => (
          <div
            className="col-6 col-sm-6 col-md-4 col-lg-4 g-2"
          >
            <div key={index} className="tyre-card border border-light">
              <img
                style={{
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
                src={images[item.thumb + ".png"]}
                alt={item.name}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface CardProps {
  src?: string;
  title?: string;
  shortDescription?: string;
  longDescription?: string;
}

function Card({ src, longDescription, shortDescription, title }: CardProps) {
  return (
    <div className="card grow" id="card">
      <img
        src={src}
        className="img-fluid rounded"
        style={{
          width: "100%",
          height: 400,
          objectFit: "cover",
          objectPosition: "center",
        }}
        alt="#"
      />
      <div className="card-description">
        <h5 className="card-title">{title}</h5>
        <div className="short-desc">{shortDescription}</div>
        <div className="long-desc">{longDescription}</div>
      </div>
    </div>
  );
}
