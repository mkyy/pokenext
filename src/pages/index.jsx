import styled from 'styled-components';
import Card from '../components/Card';
import Image from 'next/image';

export async function getStaticProps() {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50');
  const res = await data.json();

  res.results.forEach((element, index) => {
    element.id = index + 1;
  });

  return {
    props: { pokemons: res.results },
  };
}

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1440px;
  justify-content: center;
`;

const LogoContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 42px;
    font-family: 'Chakra Petch', sans-serif;
    margin-right: 20px;
    span {
      color: #e94135;
    }
  }
`;

export default function Home({ pokemons }) {
  return (
    <>
      <LogoContainer className='logo'>
        <h1>
          <span>Poke</span>Next
        </h1>
        <Image
          className='pokeball'
          src='/pokeball.jpg'
          alt='pokeball'
          width={60}
          height={60}
          layout={'fixed'}
        />
      </LogoContainer>
      <CardsContainer>
        {pokemons.map(pokemon => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </CardsContainer>
    </>
  );
}
