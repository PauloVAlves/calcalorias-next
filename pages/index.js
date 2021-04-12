import Head from 'next/head';
import styled from 'styled-components';
import CalculatedTable from '../components/CalculatedTable/CalculatedTable';
import AddToListForm from '../components/form/AddToListForm';
import CalculateForm from '../components/form/CalculateForm';
import Table from '../components/table/Table';

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
      <CalculateForm />
      <CalculatedTable />
    </Page>
  );
};

const Page = styled.div``;

export default Home;
