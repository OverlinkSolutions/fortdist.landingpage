import instagram from "../../assets/instagram.png";
import map_mark from "../../assets/map_mark.png";
import phone from "../../assets/phone.png";
import Logo from "../../assets/logo.png";

export function Footer() {
  return (
    <div
      className="footer"
      style={{
        color: "white",
        width: "100%",
        backgroundColor: "#000151",
        padding: "32px 0px",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 32,
        }}
      >
        <div>
          <img src={Logo} height="50" alt="Logomarca da Fort Distribuidora" />
        </div>
        <div style={{ display: "flex", gap: 16, fontWeight: "600", flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
          <a
            href="#produtos"
            style={{ color: "white", textDecoration: "none" }}
          >
            PRODUTOS
          </a>
          <a href="#marcas" style={{ color: "white", textDecoration: "none" }}>
            MARCAS
          </a>
          <a
            href="tel:79999614009"
            style={{ color: "white", textDecoration: "none" }}
          >
            CONTATO
          </a>
          <a
            href="https://www.google.com/maps/place/Av.+Otoniel+D%C3%B3ria,+521+-+Centro,+Itabaiana+-+SE,+49500-000,+Brazil/@-10.6862056,-37.4361884,16z/data=!4m6!3m5!1s0x70ffa844bec0c97:0x774705f49f618b05!8m2!3d-10.6857257!4d-37.4325072!16s%2Fg%2F11h71jl42z?hl=en&entry=ttu&g_ep=EgoyMDI0MTEwNS4wIKXMDSoASAFQAw%3D%3D"
            style={{ color: "white", textDecoration: "none" }}
          >
            LOCALIZAÇÃO
          </a>
        </div>
        <div style={{ height: 1, backgroundColor: "white", width: "100%" }} />
        <a href="https://www.instagram.com/fortdist/" style={{ textDecoration: 'none', color: "white", fontWeight: '700' }}>
          <img src={instagram} alt="#" width={30} />
          <span> Instagram</span>
        </a>
      </div>
    </div>
  );
}
