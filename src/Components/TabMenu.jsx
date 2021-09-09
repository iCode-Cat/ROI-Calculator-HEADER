import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
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
`;

const Text = styled.a`
  position: relative;
  background: red;
  list-style: none;
  max-width: 220px;
`;

const ExtentedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: -232px;
  min-width: 232px;
`;

const Extented = styled.a`
  display: flex;
  flex-direction: column;
  background: blue;
  max-width: 220px;
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
          onMouseEnter={() => {
            tab.extends && setExtented(true);
          }}
          onMouseLeave={() => {
            !tab.extends && setExtented(false);
          }}
        >
          {tab.name}
          {tab.extends && extented && (
            <ExtentedWrapper>
              {tab.extendedTab.map((tab) => (
                <Extented>{tab.name}</Extented>
              ))}
            </ExtentedWrapper>
          )}
        </Text>
      ))}
    </Wrapper>
  );
};

export default TabMenu;
