import { Outlet } from "react-router-dom";
import HeaderPage from "./components/HeaderPage";
import FooterPage from "./components/FooterPage";

export default function RootLayout() {
  return (
    <>
      <HeaderPage />
      <main>
        <Outlet />
      </main>
      <FooterPage />
    </>
  );
}
