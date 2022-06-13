import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  background-color: #ef5350;
  height: 70px;

  .logo {
    display: flex;
    align-items: center;

    h1 {
      margin-inline: 15px;
      font-family: 'Chakra Petch', sans-serif;
      font-style: italic;
      font-weight: 900;
      color: #222;
    }

    &:hover {
      cursor: pointer;
    }
  }

  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    list-style: none;

    li a {
      margin-right: 20px;
      text-decoration: none;
      color: #222;
      font-size: 18px;
    }
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Link href='/'>
        <div className='logo'>
          <h1>PokeNext</h1>
          <Image
            className='pokeball'
            src='/pokeball.jpg'
            alt='pokeball'
            width={40}
            height={40}
            layout={'fixed'}
          />
        </div>
      </Link>
      <nav>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
      </nav>
    </HeaderContainer>
  );
}
