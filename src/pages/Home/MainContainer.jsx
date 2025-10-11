import ProductCard from "./components/ProductCard";
import portaChuteiraVca from "../../assets/img/porta-chuteira-vca.png";
import casacoVca from "../../assets/img/casaco-vca-2.png";
import sacochilaVca from "../../assets/img/sacochila-vca.png";
import bolsaJumboVca from "../../assets/img/bolsa-jumbo-vca.png";
// import camisaBrancaVca from "../../assets/img/camisa-branca-vca.png";
// import camisaPretaVca from "../../assets/img/camisa-preta-vca.png";
import camisaTorcedorPreta from "../../assets/img/camisa-torcedor-vca-preta.png";
import camisaTorcedorBranca from "../../assets/img/camisa-torcedor-vca-branca.png";
import garrafaVca from "../../assets/img/garrafa-vca.png";
import meiaVca from "../../assets/img/meia-vca.png";

function MainContainer() {
  return (
    <section className="grid-rows-2 grid-cols-1 min-h-screen ">
      <div className="  bg-[#e8e5da] text-[#0d0d0d] py-10 grid grid-rows-2 grid-cols-4 gap-3 p-10 justify-items-center">
        <ProductCard title={"Casaco"} image={casacoVca} />
        <ProductCard title={"Camisa Preta"} image={camisaTorcedorPreta}/>
        <ProductCard title={"Camisa Branca"} image={camisaTorcedorBranca}/>
        <ProductCard title={"Garrafa (900ml)"} image={garrafaVca}/>
        <ProductCard title={"Meia"}   image={meiaVca}/>
        <ProductCard title={"Bolsa (Jumbo)"} image={bolsaJumboVca} />
        <ProductCard title={"Bolsa (Sacochila)"} image={sacochilaVca} />
        <ProductCard title={"Porta Chuteira"} image={portaChuteiraVca} />
      </div>
    </section>
  );
}

export default MainContainer;
