import "./styles/style.css";
import Header from "../components/HeaderPage";
import FooterPage from "../components/FooterPage";
function HomePage() {
  return (
    <main className="p-0 m-0 ">
      <Header></Header>
      <section className="section-main">
        <div style={{display:"flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
        }}>
          <h1>Ola Mundo</h1>
          <h1>Ola Mundo</h1>
          <h1>Ola Mundo</h1>
          <h1>Ola Mundo</h1>
          <h1>Ola Mundo</h1>
          <h1>Ola Mundo</h1>
          <h1>Ola Mundo</h1>
          <h1>Ola Mundo</h1>
        </div>
      </section>
      <FooterPage></FooterPage>
    </main>
  );
}

export default HomePage;
