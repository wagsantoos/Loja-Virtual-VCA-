import casacoVca from "../../assets/img/casaco-vca.jpg";
import camisaBranca from "../../assets/img/camisa-branca-vca.png";
import PriceDef from "./components/Price/index";
import Stars from "./components/Stars/index";
import Carrosel from "./components/Carrosel/index";
import ButtonsSizes from "./components/ButtonsSizes";
export default MainContainer;

function MainContainer() {
  return (
    <>
      <section className="bg-red-700 flex justify-center h-[100%] p-5">
        <section className="bg-green-500 w-svh  overflow-hidden ">
          <div className="bg-amber-300 flex justify-center h-6">
            <h3>Camisa do VCA - Jogador</h3>
          </div>
          <div id="slider" className="bg-purple-600 flex justify-center">
            <Carrosel className="" images={[casacoVca, camisaBranca]} />
          </div>

          <section>
            <div className="bg-blue-300 w-[100%] flex">
              <div>
                <h4 className="font-bold text-[14px]">Sobre o produto</h4>
                <p className="text-[12px]">
                  Camisa super confortável para uso diário e pra treinos de alta
                  performace
                </p>
                <h4 className="font-bold text-[14px]">
                  CARACTERÍSTICAS E BENEFÍCIOS
                </h4>
                <p className="text-[12px]">
                  Todos os produtos originais da PUMA possuem tag com selo
                  holográfico com distintivo do clube, que garantem a qualidade
                  e originalidade do produto.
                </p>
                <h4 className="font-bold text-[14px]">DETALHES</h4>
                <p className="text-[12px]">
                  Regular fit <br />
                  Gola em cor contrastante <br />
                  Manga curta com punho contrastante <br />
                  Recortes laterais <br />
                  Logo PUMA bordado do lado direito do peito
                  <br />
                </p>
              </div>

              <div className="bg-gray-700 w-6xl flex flex-col items-center ">
                <div className="bg-fuchsia-300 min-h-10 flex ml-35">
                  <PriceDef />
                </div>
                  
                <div className="bg-blue-300 min-h-10 flex ml-16">
                  <Stars />
                </div>
                
                <div>
                <ButtonsSizes/>
                </div>

              </div>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}
