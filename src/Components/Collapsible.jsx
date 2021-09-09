import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 2rem;
  grid-column: 1/3;
  .tab-wrapper {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: flex-start;
    align-items: center;
    border-bottom: solid 1px red;
  }
`;
const Tab = styled.a`
  padding: 1.5rem 0rem;
  cursor: pointer;
  font-size: 1.6rem;
`;

const Collapsible = ({ tabsObject }) => {
  console.log(tabsObject);
  return (
    <Wrapper>
      {tabsObject.map((tab) => (
        <div className='tab-wrapper'>
          <Tab>{tab.name}</Tab>
          <span className='material-icons'>expand_more</span>
        </div>
      ))}
    </Wrapper>
  );
};

export default Collapsible;
