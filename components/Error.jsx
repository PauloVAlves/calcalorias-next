import styled from 'styled-components';

const Error = () => {
  return (
    <ErrorPage>
      <ErrorImage
        src='/vika-aleksandrova-0wcACK_dcTo-unsplash.jpg'
        alt='Cat sleeping on the keyboard'
      />
      <figcaption>
        Photo by{' '}
        <a href='https://unsplash.com/@vicaleksa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
          Vika Aleksandrova
        </a>{' '}
        on{' '}
        <a href='/s/photos/cat-keyboard?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
          Unsplash
        </a>
      </figcaption>
      <ErrorMessage>Oops, Algo deu errado.</ErrorMessage>
    </ErrorPage>
  );
};

const ErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  figcaption {
    font-size: 1.03rem;
    text-align: center;
    color: #444;
  }
  @media (max-width: 900px) {
    figcaption {
      font-size: 0.68rem;
      text-align: center;
      color: #444;
    }
  }
`;

const ErrorImage = styled.img`
  margin: auto;
  height: 500px;
  width: 300px;
  border-radius: 10px;
  @media (max-width: 900px) {
    height: 300px;
    width: 200px;
  }
`;

const ErrorMessage = styled.h3`
  text-align: center;
  font-size: 2rem;
  color: #444;
  animation: blink 0.5s linear 2s infinite alternate;

  @keyframes blink {
    0% {
      color: #000;
    }
    50% {
      color: #f00;
    }
  }
  @media (max-width: 900px) {
    text-align: center;
    font-size: 1rem;
  }
`;

export default Error;
