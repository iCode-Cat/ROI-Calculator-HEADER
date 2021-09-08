import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;

  min-height: 85px;
  padding: 0 2.5rem;
`;

const Logo = styled.img`
  max-width: 120px;
  @media (min-width: 50em) {
    max-width: 170px;
  }
`;

const HamburgerMenu = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 15px;
  cursor: pointer;
  .bar {
    height: 2px;
    width: 20px;
    background: #000;
  }
  .bar:nth-child(2) {
    width: 16px;
  }
  @media (min-width: 50em) {
    display: none;
  }
`;

const NavigationWrapper = styled.div`
  display: none;
  @media (min-width: 10em) {
    display: grid;
    grid-auto-flow: column;
    gap: 36px;
  }
`;

const Button = styled.button`
  cursor: pointer;
  color: ${(props) =>
    props.textColor ? props.textColor : 'rgba(52, 49, 76, 0.66)'};
  border: ${(props) =>
    props.border ? 'solid 1px rgba(52, 49, 76, 0.66)' : 'unset'};
  border-radius: 100px;
  padding: 1rem 2.5rem !important;
  font-size: 1.6rem;
  background: ${(props) => (props.bg ? props.bg : '#FFF')};
  transition: 0.3s;
  &:hover {
    color: ${(props) => (props.textColor ? props.textColor : '#333')};
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Logo
        src='https://cognni.ai/wp-content/uploads/2020/03/coggni-logo-600px.png'
        alt='Cognni'
      />
      <HamburgerMenu>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </HamburgerMenu>
      <NavigationWrapper>
        <Button border>Login</Button>
        <Button bg='#2196f3' blue='#2196f3' textColor='#FFF'>
          Sign Up Free
        </Button>
      </NavigationWrapper>
    </Wrapper>
  );
};

export default Header;
