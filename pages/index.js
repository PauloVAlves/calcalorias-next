import Head from 'next/head';
import styled from 'styled-components';
import AddToListForm from '../components/form/AddToListForm';
import Table from '../components/table/Table';
import '../styles/Home.module.css';

const Home = () => {
  return (
    <Page>
      <Head>
        <title>CalCalorias - Calculadora de Calorias</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Calculadora de calorias e tabela nutricional completa'
        ></meta>
      </Head>
      <AddToListForm />
      <Table />
    </Page>
  );
};

const Page = styled.div``;

export default Home;
