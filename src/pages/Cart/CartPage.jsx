import camisaPretaModelo from "../../assets/img/modelo-camisa-preta.png";
import CardProductCar from "./components/CardProductCart";
import camisaBrancaModelo from "../../assets/img/modelo-camisa-branca.png";
import bolsaJumboVca from "../../assets/img/bolsa-jumbo-vca.png";

function ProductPage() {
  return (
    <section className="min-h-screen grid  grid-cols-[1.5fr_1fr]  m-5 bg-[#e8e5da]">
      <div>
        <CardProductCar
          title={"Camisa Torcedor "}
          color="Preta"
          size="GG"
          image={camisaPretaModelo}
          price={"149.99"}
          priceDiscount={"99.99"}
        />
        <CardProductCar
          title={"Camisa Torcedor "}
          color="Branca"
          size="GG"
          image={camisaBrancaModelo}
          price={"149.99"}
          priceDiscount={"99.99"}
        />
        <CardProductCar
          title={"Bolsa (Jumbo) "}
          color="Preta"
          image={bolsaJumboVca}
          price={"149.99"}
          priceDiscount={"99.99"}
        />
      </div>
      <div>
        <div className="flex justify-center items-center flex-col bg-[#0d0d0d]  text-white m-2 rounded-xl p-4 ">
          <h2 className="text-center text-4x1 ">Resumo da Compra</h2>
          <ul className="text-base min-w-2xs ">
            <li className=" border-b border-t border-gray-400/50 ">
              <span>Produtos</span>
              <span>- R$ 99.99</span>
            </li>
            <li className=" border-b  border-gray-400/50 ">
              <span>Desconto no pix</span>
              <span>- R$ 99.99</span>
            </li>
            <li>
              <div className="flex items-end justify-between min-w-2xs pt-2 pb-2">
                <span>
                  <strong>Total</strong>
                </span>
                <span className="text-3xl">
                  <strong>R$ 99.99</strong>
                </span>
              </div>
            </li>
          </ul>
          <div className="flex justify-center flex-col">
            <button className="bg-yellow-500  rounded-md text-2xl font-bold p-2 mt-2 cursor-pointer transition duration-500 hover:bg-yellow-600 hover:text-[#0d0d0d]">
              Finalizar
            </button>
            <button className="mt-2 cursor-pointer text-x1 text-yellow-400 font-bold hover:text-yellow-600">
              Buscar mais produtos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
