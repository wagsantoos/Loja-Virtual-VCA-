import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

function FooterPage() {
  return (
    <footer style={{
      backgroundColor: "#1a1a1a",
      color: "#fff",
      textAlign: "center",
      padding: "2rem 1rem",
      marginTop: "3rem",
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h3 style={{ marginBottom: "0.5rem", color: "#FFD700" }}>VCA Store 🛍️</h3>
        <p>Moda esportiva, conforto e estilo em um só lugar.</p>

        <hr style={{
          margin: "1.5rem auto",
          border: "0",
          height: "1px",
          backgroundColor: "#333",
          width: "60%"
        }} />

        <div style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
          <p><strong>CNPJ:</strong> 12.345.678/0001-99</p>
          <p><strong>Endereço:</strong> Av. Principal, 123 - Araruama, RJ</p>
          <p><strong>E-mail:</strong> contato@vcastore.com.br</p>
          <p><strong>Telefone:</strong> (22) 99999-9999</p>
        </div>

        <hr style={{
          margin: "1.5rem auto",
          border: "0",
          height: "1px",
          backgroundColor: "#333",
          width: "60%"
        }} />

        {/* Ícones de redes sociais */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          marginBottom: "1.2rem"
        }}>
          <a
            href="https://wa.me/5522999999999"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#25D366", fontSize: "1.8rem" }}
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/vcastore"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#E1306C", fontSize: "1.8rem" }}
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@vcastore"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", fontSize: "1.8rem" }}
          >
            <FaTiktok />
          </a>
        </div>

        <p style={{ fontSize: "0.8rem", color: "#bbb" }}>
          © {new Date().getFullYear()} VCA Store — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default FooterPage;
