import Head from 'next/head'
import Footer from './footer';
import Navbar from './navbar';

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Head>
        <title>App List</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <Navbar />
        { children }
      <Footer />  
    </div>
  );
}
 
export default Layout;