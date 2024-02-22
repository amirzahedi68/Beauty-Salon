import Header from "./Header";
import Footer from "./Footer";
import PropTypes from "prop-types";

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="main-wrapper">{children}</div>
      <Footer />
    </div>
  );
}
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
