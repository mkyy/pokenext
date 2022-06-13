import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const CardContainer = styled.div`
  position: relative;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ddd;
  padding: 30px 10px;
  width: 250px;
  height: 300px;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;

  h1 {
    font-family: 'Kdam Thmor Pro', sans-serif;
    color: #333;
  }

  p {
    display: flex;
    align-items: center;
    color: #ff7d01;

    img {
      margin-left: 5px;
      width: 20px;
      height: 20px;
    }
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-10px);
    background-color: #ccc;
  }
`;

export default function Card({ pokemon }) {
  return (
    <Link href={`/pokemon/${pokemon.id.toString()}`}>
      <CardContainer>
        <Image
          src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
          alt={pokemon.name}
          width={100}
          height={100}
        />
        <h1>{pokemon.name}</h1>
        <p>
          Details <img src='/arrow-up-right.svg' alt='up arrow' />
        </p>
      </CardContainer>
    </Link>
  );
}
