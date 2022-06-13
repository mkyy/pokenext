import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #131313;
  display: flex;
  width: 100vw;
  height: 50px;

  p {
    color: #eee;
    margin: auto;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>
        <span>PokeNext</span> © Maiky Roger 2022
      </p>
    </FooterContainer>
  );
}
