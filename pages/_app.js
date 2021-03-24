import DataProvider from '../data/DataContext';
import Layout from '../components/Layout';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  );
};

export default MyApp;
