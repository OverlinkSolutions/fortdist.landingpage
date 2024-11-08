import whatsapp from '../assets/whatsapp.png';

export function ButtonContact() {
  return (
    <a style={{ textDecoration: 'none' }} href="https://api.whatsapp.com/send?phone=5579999614009">
      <button
      type="button"
      className="btn btn-grad w-100 mt-2 mb-2"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img style={{ width: 25, height: 'auto', marginRight: 8 }} alt="Ícone do Whatsapp" src={whatsapp}></img>
      FALE CONOSCO
    </button>
    </a>
  )
}