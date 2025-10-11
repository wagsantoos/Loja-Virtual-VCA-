import casacoVca from "../../assets/img/casaco-vca.jpg";
import casacoVcadd from "../../assets/img/casaco-vca-2.png"
import camisaPreta from "../../assets/img/camisa-preta-vca.png"
import camisaBranca from "../../assets/img/camisa-branca-vca.png"
import { FaStar, FaRegStar, FaShoppingCart, FaHeart } from "react-icons/fa";
export default MainContainer;

function MainContainer({ rating = 4.5 }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;

  return (
    <>
      <section className=" flex justify-center h-svh">
        <section className=" w-svh flex justify-center">
          <div className=" flex  flex-wrap justify-center">
            <img src={casacoVca} className="w-80 h-80 p-1 object-contain object-cover rounded-xl m-1" ></img>
            <img src={casacoVcadd} className="w-80 h-80 p-1 object-contain object-cover rounded-xl m-1"></img>
            
            <img
              src={camisaPreta}
              className="w-80 h-80 p-1 rounded-xl m-1 object-cover -mt-75"
            ></img>
            <img
              src={camisaBranca}
              className="w-80 h-80 p-1 rounded-xl m-1 object-cover -mt-75"
            ></img>

            
          </div>
          <div className=" w-130 ">
            <h3 className="mt-10">Camisa do VCA Jogador</h3>

            
            <div className="cursor-pointer flex items-center gap-1 text-yellow-400 ">
              {Array.from({ length: 5 }).map((_, i) => {
                if (i < full) return <FaStar key={i} />;
                if (i === full && half)
                  return <FaStar key={i} className="opacity-50" />;
                return <FaRegStar key={i} className="opacity-50" />;
              })}
              <span className="ml-1 text-[10px] text-black">
                <p className="mt-2 hover:underline cursor-pointer">Confortável para uso diário</p>
              </span>
            </div>
            
            
          </div>
        </section>
      </section>
    </>
  );
}
