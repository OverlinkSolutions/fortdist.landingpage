import whatsapp from "../../assets/whatsapp.png";
import "./styles.css";

const items = [
  {
    thumb: "logo",
    name: "Pneu 1",
    price: 100,
  },
  {
    thumb: "logo",
    name: "Pneu 2",
    price: 200,
  },
  {
    thumb: "logo",
    name: "Pneu 3",
    price: 300,
  },
  {
    thumb: "logo",
    name: "Pneu 4",
    price: 400,
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
    <div className="container" style={{ marginTop: 64 }}>
      <h3 style={{ fontWeight: "bold", fontSize: 48 }}>
        Produtos em destaque!
      </h3>
      <div className="row g-0 col-sm-12 col-md-10">
        <div className="row g-8 col-sm-12 col-md-10">
          {items.map((item, index) => (
            <div
              className="col-6 col-sm-6 col-md-4 col-lg-3"
              style={{ display: "flex" }}
            >
              <div key={index} className="tyre-card border border-light">
                <img
                  style={{
                    maxWidth: "100%",
                    maxHeight: 200,
                    height: 200,
                    objectFit: "contain",
                  }}
                  src={images[item.thumb + ".png"]}
                  alt={item.name}
                />
                <span className="tyre-title">{item.name}</span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 8,
                  }}
                >
                  <span className="tyre-price">
                    {item.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                  href={`https://api.whatsapp.com/send?phone=5579988257474&text=Olá, gostaria de comprar o ${item.name}.`}
                >
                  <button className="tyre-buy-btn">
                    <img
                      alt="FALE CONOSCO"
                      src={whatsapp}
                      className="tyre-buy-btn-icon"
                    />
                    COMPRAR
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
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
