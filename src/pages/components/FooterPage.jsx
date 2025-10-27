import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import LogoVca from "../../assets/img/logo-vca.png";

function FooterPage() {
  return (
    <footer className="bg-[#0d0d0d] text-white">
      <div className="flex items-center flex-col ">
        <div className="text-center">
          <div className="p-5">
            <h3 className="text-yellow-400">Loja VCA </h3>
            <p className="text-xs ">
              Moda esportiva conforto e estilo em um só lugar
            </p>
          </div>
          <div className="text-xs border-y border-gray-400/50 w-120 p-5">
            <p>
              <strong>CNPJ:</strong> 00.000.000/0000-00
            </p>
            <p>
              <strong>Endereço: </strong>R. Conselheiro Macedo Soares N°165 - Centro
            </p>
            <p>
              <strong>E-mail: </strong>vcavoleiclube@gmail.com 
            </p>
            <p>
              <strong>Telefone: </strong>(22) 9 8165-1766
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center p-5">
        <div>
          <h3>Formas de pagamento</h3>
          <div className="flex gap-4 w-10 h-10 items-center">
            <img
              src="https://static.centauro.com.br/store/1-89-6/assets/images/payments/credit-cards/hipercard.svg"
              alt="Cartão Hipercard"
            ></img>
            <img
              src="https://static.centauro.com.br/store/1-89-6/assets/images/payments/credit-cards/american-express.svg"
              alt="Cartão American Express"
            />
            <img
              src="https://static.centauro.com.br/store/1-89-6/assets/images/payments/credit-cards/elo.svg"
              alt="Cartão Elo"
            />
            <img
              src="https://static.centauro.com.br/store/1-89-6/assets/images/payments/credit-cards/diners.svg"
              alt="Cartão Diners"
            />
            <img
              src="https://static.centauro.com.br/store/1-89-6/assets/images/payments/credit-cards/master.svg"
              alt="Cartão Mastercard"
            />
            <img
              src="https://static.centauro.com.br/store/1-89-6/assets/images/payments/credit-cards/visa.svg"
              alt="Cartão Visa"
            />
            <img
              src="https://static.centauro.com.br/store/1-89-6/assets/images/payments/pix.svg"
              alt="Ícone do pix"
              className="w-8 h-8"
            />
          </div>
        </div>
        <div>
          <h3 className="">Redes sociais</h3>
          <div className="flex justify-center gap-3">
            <a
              href="https://www.instagram.com/vcavolei/"
              target="_blank"
              className="hover:text-pink-500 text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href=""
              target="_blank"
              className="hover:text-green-500 text-2xl"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.tiktok.com/@vca251?_t=ZS-90SdLIj5cHg&_r=1"
              target="_blank"
              className="hover:text-blue-500 text-2xl"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.youtube.com/@voleiclubeararuama5066"
              target="_blank"
              className="hover:text-red-500 text-2xl"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        <div>
          <img
            src={LogoVca}
            alt="Logo do time vôlei clube araruama"
            className="w-22 h-22"
          />
        </div>
      </div>
    </footer>
  );
}

export default FooterPage;
