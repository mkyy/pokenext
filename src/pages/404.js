import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  h1 {
    font-size: 52px;
    margin-bottom: 0;
  }

  .back-btn {
    position: absolute;
    left: 50px;
    top: 50px;
    background-color: #ef5350;
    padding: 15px;
    border-radius: 5px;
    a {
      text-decoration: none;
      color: #fff;
    }
  }
`;

export default function NotFound() {
  return (
    <>
      <Container>
        <div className='back-btn'>
          <Link href='/'>Voltar</Link>
        </div>
        <h1>Error 404</h1>
        <p>Sua página não foi encontrada. </p>
        <Image src={'/scared.png'} width={300} height={300} />
      </Container>
    </>
  );
}
