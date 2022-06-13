import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-bottom: 0;
  }
`;

export default function About() {
  return (
    <>
      <Container>
        <h1>Sobre o PokeNext</h1>
        <p>
          Este projeto foi criado usando Next.js e Styled Components, todo código está disponivel no{' '}
          <a href=''>github.</a>
        </p>
        <Image src='/charizard.png' alt='About' width={300} height={300} />
      </Container>
    </>
  );
}
