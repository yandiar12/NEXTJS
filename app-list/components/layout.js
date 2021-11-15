import Footer from './footer';
import Navbar from './navbar';

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Navbar />
        { children }
      <Footer />  
    </div>
  );
}
 
export default Layout;