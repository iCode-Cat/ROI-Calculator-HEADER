import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes
const Fade = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1;
  }
`;

const Wrapper = styled.ul`
  display: grid;
  gap: 1rem;
  position: absolute;
  width: 232px;
  padding: 2rem 0rem;
  border-radius: 10px;
  margin-top: 5rem;
  left: 0;
  top: 0;
  background: #fff;
  box-shadow: 0px 17px 30px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  color: rgba(52, 49, 76, 0.66);
  animation: ${Fade} 0.1s ease-in-out forwards;
`;

const Text = styled.a`
  position: relative;
  list-style: none;
  max-width: 232px;
  font-size: 1.6rem;
  padding: 1rem 2rem;
  transition: 0.3s;
  &:hover {
    background: #e4f6fc;
  }
`;

const ExtentedWrapper = styled.div`
  display: grid;
  gap: 1rem;
  position: absolute;
  border-radius: 10px;
  top: -20px;
  right: -233px;
  width: 232px;
  box-shadow: 0px 17px 30px 0px rgba(0, 0, 0, 0.1);
  padding: 2rem 0rem;
  color: rgba(52, 49, 76, 0.66);
  background: #fff;
  animation: ${Fade} 0.1s ease-in-out forwards;
`;

const Extented = styled.a`
  display: flex;
  flex-direction: column;
  width: 232px;
  font-size: 1.6rem;
  padding: 1rem 2rem;
  transition: 0.3s;
  &:hover {
    background: #e4f6fc;
  }
`;

const TabMenu = ({
  index,
  seTabIndex,
  defaultTabIndex,
  menuList,
  extented,
  setExtented,
}) => {
  return (
    <Wrapper
      onMouseEnter={() => seTabIndex(index)}
      onMouseLeave={defaultTabIndex}
    >
      {menuList.map((tab, index) => (
        <Text
          key={index}
          href={tab.href}
          target='_parent'
          onMouseEnter={() => {
            tab.extends && setExtented(true);
            !tab.extends && setExtented(false);
          }}
        >
          {tab.name}
          {tab.extends && extented && (
            <ExtentedWrapper>
              {tab.extendedTab.map((tab, index) => (
                <Extented key={index} target='_parent' href={tab.href}>
                  {tab.name}
                </Extented>
              ))}
            </ExtentedWrapper>
          )}
        </Text>
      ))}
    </Wrapper>
  );
};

export default TabMenu;
