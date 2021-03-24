import React, { useContext } from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import { DataContext } from '../data/DataContext';
import Loading from './Loading';
import Error from './Error';

const Layout = ({ children }) => {
  const { isLoaded, error } = useContext(DataContext);
  if (error) {
    return (
      <div>
        <Navbar />
        <Error />
        <Footer />
      </div>
    );
  } else if (!isLoaded) {
    return <Loading />;
  } else {
    return (
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    );
  }
};

export default Layout;
