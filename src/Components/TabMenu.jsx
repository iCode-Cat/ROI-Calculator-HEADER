import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
  display: grid;
  gap: 1rem;
  position: absolute;
  min-width: 232px;
  padding: 2rem 1rem;
  border-radius: 10px;
  margin-top: 5rem;
  left: 0;
  top: 0;
  background: #fff;
  box-shadow: 0px 17px 30px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  color: rgba(52, 49, 76, 0.66);
`;

const Text = styled.a`
  position: relative;
  list-style: none;
  max-width: 220px;
  font-size: 1.6rem;
  padding: 1rem 1rem;

  &:hover {
    background: #e4f6fc;
  }
`;

const ExtentedWrapper = styled.div`
  display: grid;
  gap: 1rem;
  position: absolute;
  top: -20px;
  right: -245px;
  width: 232px;
  box-shadow: 0px 17px 30px 0px rgba(0, 0, 0, 0.1);
  padding: 2rem 1rem;
  color: rgba(52, 49, 76, 0.66);
`;

const Extented = styled.a`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  font-size: 1.6rem;
  padding: 1rem;
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
      {menuList.map((tab) => (
        <Text
          href={tab.href}
          onMouseEnter={() => {
            tab.extends && setExtented(true);
            !tab.extends && setExtented(false);
          }}
        >
          {tab.name}
          {tab.extends && extented && (
            <ExtentedWrapper>
              {tab.extendedTab.map((tab) => (
                <Extented href={tab.href}>{tab.name}</Extented>
              ))}
            </ExtentedWrapper>
          )}
        </Text>
      ))}
    </Wrapper>
  );
};

export default TabMenu;
