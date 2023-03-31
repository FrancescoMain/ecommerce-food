import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Router from "../../routes/Router";
const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Router />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
