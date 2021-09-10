import React, { useState } from 'react';
import styled from 'styled-components';

// ONLY FOR MOBILE
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  grid-column: 1/2;
  .grid-fix {
    grid-column: 1/3;
  }
  .TabWrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1rem 0rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
  .tab-name {
    display: flex;
    align-items: center;
  }
  .tab-icon {
    display: grid;
    place-items: center;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 3px;
    width: 36px;
    height: 36px;
    margin-left: 1.8rem;
  }

  .tab-expand {
    display: grid;
  }

  @media (min-width: 50em) {
    display: none;
  }
`;
const Tab = styled.a`
  padding: 1.5rem 0rem;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 500;
`;

const ExpandWrapper = styled.a`
  display: grid;
  grid-template-columns: 0fr 1fr;
  cursor: pointer;
  padding: 0.8rem 1rem;
  transition: 0.3s;
  font-size: 1.5rem;

  &:hover {
    /* background: #e4f6fc; */
  }
`;

const ExpandWrapperExtra = styled.a`
  grid-column: 1/3;
  cursor: pointer;
  padding: 0.8rem 1rem;
  transition: 0.3s;
  font-size: 1.5rem;
  a {
    grid-column: 1/3;
  }
  &:hover {
    /* background: #e4f6fc; */
  }
`;

const Collapsible = ({ tabsObject }) => {
  const [tabIndex, setTabIndex] = useState(null);
  const [extraTab, setExtraTab] = useState(false);

  const tabIndexHandler = (index) => {
    if (index === tabIndex) {
      setTabIndex(null);
      return;
    }
    setTabIndex(index);
  };

  return (
    <Wrapper>
      {tabsObject.map((tab, index) => (
        <div key={index} className='TabWrapper'>
          <div onClick={() => tabIndexHandler(index)} className='tab-name'>
            <Tab>{tab.name}</Tab>
            <span className='material-icons tab-icon'>expand_more</span>
          </div>
          <div className='tab-expand'>
            {tabIndex === index &&
              tab.menuList.map((ctx) => (
                <ExpandWrapper>
                  <a
                    className={`${!ctx.extends && 'grid-fix'}`}
                    href={ctx.href}
                  >
                    {ctx.name}
                  </a>
                  {ctx.extends && (
                    <>
                      <span
                        onClick={() => {
                          setExtraTab(!extraTab);
                        }}
                        className='material-icons tab-icon'
                      >
                        expand_more
                      </span>
                      {ctx.extendedTab.map(
                        (item) =>
                          extraTab && (
                            <ExpandWrapperExtra href={item.href}>
                              {item.name}
                            </ExpandWrapperExtra>
                          )
                      )}
                    </>
                  )}
                </ExpandWrapper>
              ))}
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

export default Collapsible;
