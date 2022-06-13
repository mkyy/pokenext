import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const getStaticPaths = async () => {
  const maxPokemons = 50;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${maxPokemons}`);
  const data = await res.json();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: { id: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ctx => {
  const id = ctx.params.id;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PokeCard = styled.div`
  width: 300px;
  height: 400px;
  background-color: #ccc;
  border-radius: 5px;
  padding: 5px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  h1 {
    background-color: #ef5350;
    width: 100%;
    text-align: center;
    border-radius: 15px 0 15px 0;
    padding: 2px;
    color: #333;
    font-family: 'Kdam Thmor Pro', sans-serif;
  }

  img {
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
  }

  .types-wrapper {
    display: flex;

    div {
      background-color: #fefefe;
      border-radius: 5px;
      padding: 5px;
      margin-right: 5px;
      font-family: 'Chakra Petch', sans-serif;
    }
  }

  .back-btn {
    position: absolute;
    bottom: 10px;
    left: 15px;
    background: #e94135;
    padding: 5px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      cursor: pointer;
    }
  }
`;

export default function Details({ pokemon }) {
  return (
    <Container>
      <PokeCard>
        <h1>{pokemon.name}</h1>
        <img
          src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
          alt={`${pokemon.name} image`}
        />
        <div className='types-wrapper'>
          {pokemon.types.map((item, idx) => (
            <div key={item.id}>{item.type.name}</div>
          ))}
        </div>
        <div className='stats'>
          <p>Altura: {pokemon.height * 10}cm</p>
          <p>Peso: {pokemon.weight / 10}kg</p>
        </div>
        <div className='back-btn'>
          <Link href={'/'}>
            <Image src={'/arrow-left.svg'} alt='back' width={20} height={20} />
          </Link>
        </div>
      </PokeCard>
    </Container>
  );
}
