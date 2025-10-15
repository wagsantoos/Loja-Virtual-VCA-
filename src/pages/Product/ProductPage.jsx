import Header from "../components/HeaderPage";
import FooterPage from "../components/FooterPage";
import camisaPretaModelo from "../../assets/img/modelo-camisa-preta.png";
import CardProductCar from "./components/CardProductCar";
import camisaBrancaModelo from "../../assets/img/modelo-camisa-branca.png";
import bolsaJumboVca from "../../assets/img/bolsa-jumbo-vca.png";

function ProductPage() {
  return (
    <main>
      <Header />
      <section className="min-h-screen grid  grid-cols-[2fr_1fr] bg-[#e8e5da]  m-5">
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
        <div className=""></div>
      </section>
      <FooterPage />
    </main>
  );
}

export default ProductPage;
