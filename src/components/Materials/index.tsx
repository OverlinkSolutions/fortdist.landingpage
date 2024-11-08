import { ReactComponent as GardenWork } from "../../assets/garden-work.svg";
import { ReactComponent as WheelBarrow } from "../../assets/wheelbarrow.svg";
import { ReactComponent as Electricity } from "../../assets/electricity.svg";
import { ReactComponent as Plumbering } from "../../assets/plumbering.svg";
import "./index.css";
import { useEffect, useRef, useState } from "react";

export default function Materials() {
  return (
    <div className="container" style={{ marginTop: 64 }}>
      <div className="row g-4">
        <div className="col-6 col-md-3">
          <div className="card-material border p-8 d-flex gap-3 flex-column justify-content-center align-items-center">
            <WheelBarrow className="card-icon" fill="#ff0000" />
            <span className="card-title">Alvenaria</span>
            <span className="text-center description">
              Cimento, blocos e tijolos para a construção da estrutura.
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card-material border p-8  d-flex gap-3 flex-column justify-content-center align-items-center">
            <GardenWork className="card-icon" fill="#ff0000" />
            <span className="card-title">Ferragens</span>
            <span className="text-center card-description">
              Ferramentas para o trabalho de alvenaria e acabamentos.
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card-material border p-8 d-flex gap-3 flex-column justify-content-center align-items-center">
            <Electricity className="card-icon" fill="#ff0000" />
            <span className="card-title">Elétricos</span>
            <span className="text-center card-description">
              Fios, cabos e acessórios para a instalação elétrica.
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3">
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
