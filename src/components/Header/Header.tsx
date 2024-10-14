import React from "react";

import "./styles.css";
import Logo from "../../assets/logo.png";
import { useState, useEffect } from "react";
import whatsapp from "../../assets/whatsapp.png";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default function Header() {
  const { width } = useWindowDimensions();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="header-container">
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "16px 0px",
            }}
          >
            <div>
              <img src={Logo} height="33" alt="Fazenda Modelo Logo" />
            </div>
              <a
                style={{ textDecoration: "none" }}
                href="https://api.whatsapp.com/send?phone=5579999683408&text=Olá, gostaria de alugar a fazenda!"
              >
                <button
                  style={{
                    backgroundColor: "#009205",
                    color: "white",
                    fontWeight: "bold",
										fontSize: 14,
                  }}
                  className="btn"
                >
                  <img
                    alt="FALE CONOSCO"
                    src={whatsapp}
                    style={{ width: 20, marginRight: 8 }}
                  />
                  FALE CONOSCO
                </button>
              </a>
            </div>
          </div>
        </div>	
      <div style={{ width: "100%", height: 65 }}>
        {/* Empty div to keep the content from being covered by the header */}
      </div>
    </>
  );
}
