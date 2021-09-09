import React, { useState } from 'react';
import styled from 'styled-components';
import TabMenu from './TabMenu';

// JSON Object of Header
const tabsObject = [
  {
    name: 'Solutions',
    menuList: [
      {
        name: 'Cloud Intelligence',
        href: 'https://cognni.ai/cloud-intelligence/',
      },
      {
        name: 'On-Premises Intelligence',
        href: 'https://cognni.ai/on-premises-mapping/',
      },
      {
        name: 'Automations',
        href: '/',
        extends: true,
        extendedTab: [
          {
            name: 'Microsoft Information Protection (MIP)',
            href: 'https://cognni.ai/cognni-apps/#MIP',
          },
          {
            name: 'Microsoft Cloud App Security (MCAS) – coming soon',
            href: 'https://cognni.ai/cognni-apps/#MCAS',
          },
          {
            name: 'Azure Sentinel – coming soon',
            href: 'https://cognni.ai/cognni-apps/#Sentinel',
          },
        ],
      },
    ],
  },
  {
    name: 'Use Cases',
    menuList: [
      {
        name: 'Govern All of Your Data',
        href: 'https://cognni.ai/wp-content/uploads/2020/08/Use-Case-Govern-All-of-Your-Data.pdf',
      },
      {
        name: 'Identify Appropriate Security Tools',
        href: 'https://cognni.ai/wp-content/uploads/2020/08/Use-Case-Identify-Appropriate.pdf',
      },
      {
        name: 'Implement Accurate Policies',
        href: 'https://cognni.ai/wp-content/uploads/2020/08/Use-Case-Implement-Accurate-Policies.pdf',
      },
      {
        name: 'Investigate Incidents in Depth',
        href: 'https://cognni.ai/wp-content/uploads/2020/08/Use-Case-Investigate-Incidents-in-Depth.pdf',
      },
      {
        name: 'Enhanced Incident Remediation',
        href: 'https://cognni.ai/wp-content/uploads/2020/08/Use-Case-Enhanced-Incident-Remediation.pdf',
      },
    ],
  },
];

// Styled Components
const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  min-height: 85px;
  padding: 0 2.5rem;
  .tab-wrapper {
    display: flex;
    align-items: center;
    position: relative;
  }
  @media (min-width: 50em) {
    padding: 3rem 6rem;
  }
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
  padding: ${(props) => props.pd && '1rem 2.5rem !important'};
  font-size: 1.6rem;
  background: ${(props) => (props.bg ? props.bg : '#FFF')};
  transition: 0.3s;
  font-weight: 400;
  a {
    color: unset;
    text-decoration: unset;
  }
  &:hover {
    color: ${(props) => (props.textColor ? props.textColor : '#333')};
    background: ${(props) => props.blue && '#2196f3'};
  }
`;

const Header = () => {
  const [tabIndex, seTabIndex] = useState(null);
  const [extented, setExtented] = useState(false);

  // Default Tab Index
  const defaultTabIndex = () => {
    // After leave the mouse from the tab, remove menuList

    seTabIndex(null);
    setExtented(false);
  };

  return (
    <Wrapper onMouseLeave={defaultTabIndex}>
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
        {tabsObject.map((tab, index) => (
          <div className='tab-wrapper'>
            <Button onMouseEnter={() => seTabIndex(index)}>{tab.name}</Button>
            {tabIndex === index && (
              <TabMenu
                extented={extented}
                setExtented={setExtented}
                index={index}
                defaultTabIndex={defaultTabIndex}
                seTabIndex={seTabIndex}
                menuList={tab.menuList}
              />
            )}
          </div>
        ))}
        <Button pd border>
          Login
        </Button>
        <Button pd bg='#2196f3' blue='#2196f3' textColor='#FFF'>
          <a href=''>Sign Up Free</a>
        </Button>
      </NavigationWrapper>
    </Wrapper>
  );
};

export default Header;
