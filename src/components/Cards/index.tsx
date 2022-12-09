
export function Cards() {
  return (
    <div className="container" style={{ marginTop: 64 }}>
      <div className="row g-3">
        <div className="col-md-3 col-sm-6 col-6">
          <Card
            src={"https://picsum.photos/310/500"}
          />
        </div>
        <div className="col-md-3 col-sm-6 col-6">
          <Card
            src={"https://picsum.photos/310/500"}
          />
        </div>
        <div className="col-md-3 col-sm-6 col-6">
          <Card
            src={"https://picsum.photos/310/500"}
          />
        </div>
        <div className="col-md-3 col-sm-6 col-6">
          <Card
            src={"https://picsum.photos/310/500"}
          />
        </div>
      </div>
    </div>
  );
}

interface CardProps {
  src?: string;
  text?: string;
  color?: string;
}

function Card({ src, text, color }: CardProps) {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <img
        src={src}
        className="img-fluid rounded"
        alt="..."
      />
    </div>
  );
}