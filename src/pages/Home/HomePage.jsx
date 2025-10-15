import Header from "../components/HeaderPage";
import FooterPage from "../components/FooterPage";
import MainContainer from "./MainContainer"

function HomePage() {
  return (
    <main >
      <Header/>
      <MainContainer/>
      <FooterPage/>
    </main>
  );
}

export default HomePage;
