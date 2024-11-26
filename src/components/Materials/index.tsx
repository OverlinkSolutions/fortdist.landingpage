import { ReactComponent as DoorLock } from "../../assets/door-lock.svg";
import { ReactComponent as WheelBarrow } from "../../assets/wheelbarrow.svg";
import { ReactComponent as Electricity } from "../../assets/electricity.svg";
import { ReactComponent as Plumbering } from "../../assets/plumbering.svg";
import "./index.css";

export default function Materials() {
  return (
    <div className="container" style={{ marginTop: 64 }}>
      <div className="row g-4 d-flex">
        <div className="col-6 col-md-3 d-flex">
          <div className="card-material border p-8 d-flex gap-3 flex-column justify-content-center align-items-center">
            <WheelBarrow className="card-icon" fill="#ff0000" />
            <span className="card-title">Ferramentas</span>
            <span className="text-center description">
              Todos os tipos de ferramentas manuais e elétricas.
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3 d-flex">
          <div className="card-material border p-8 d-flex gap-3 flex-column justify-content-center align-items-center">
            <DoorLock className="card-icon" fill="#ff0000" />
            <span className="card-title">Ferragens</span>
            <span className="text-center card-description">
              Fechaduras, cadeados, ferrolhos e parafusos.
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3 d-flex">
          <div className="card-material border p-8 d-flex gap-3 flex-column justify-content-center align-items-center">
            <Electricity className="card-icon" fill="#ff0000" />
            <span className="card-title">Elétricos</span>
            <span className="text-center card-description">
              Fios, cabos e acessórios para a instalação elétrica.
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3 d-flex">
          <div className="card-material border  d-flex gap-3 flex-column justify-content-center align-items-center">
            <Plumbering className="card-icon" fill="#ff0000" />
            <span className="card-title">Hidráulica</span>
            <span className="text-center card-description">
              Tubos, conexões e itens sanitários para o sistema hidráulico.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
