import React, { useState } from 'react';
import styled from 'styled-components';
import Collapsible from './Collapsible';
import TabMenu from './TabMenu';
import AnimatedHamburger from './AnimatedHamburger';

// JSON Object of Header
const tabsObject = [
  {
    id: 0,
    name: 'Solutions',
    href: 'https://cognni.ai/use-cases/',
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
    id: 1,
    name: 'Use Cases',
    href: 'https://cognni.ai/use-cases/',
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
      // {
      //   name: 'Enhanced Incident Remediation',
      //   href: 'https://cognni.ai/wp-content/uploads/2020/08/Use-Case-Enhanced-Incident-Remediation.pdf',
      // },
    ],
  },
];

// Styled Components
const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem 2.5rem;
  background: #fff;
  height: ${(props) => (props.expand ? '500px' : 'unset')};
  /* Navigation Buttons */
  .menu-btn {
    background: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0);
    border-radius: unset;
    transition: unset;
    padding-bottom: 0.3rem;
    &:hover {
      border-bottom: 1px solid black;
    }
  }

  span {
    cursor: pointer;
  }
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

const NavigationWrapperWeb = styled.div`
  display: none;
  @media (min-width: 50em) {
    display: grid;
    grid-auto-flow: column;
    gap: 36px;
  }
`;

const Button = styled.a`
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
    background: ${(props) => props.blue && '#1876c4'};
  }
`;

const Header = ({ header, tabIndex, seTabIndex }) => {
  const [extented, setExtented] = useState(false);
  const [mobActive, setMobActive] = useState(false);

  // Default Tab Index
  const defaultTabIndex = () => {
    // After leave the mouse from the tab, remove menuList

    seTabIndex(null);
    setExtented(false);
  };

  return (
    <Wrapper
      expand={tabIndex !== null}
      ref={header}
      onMouseLeave={defaultTabIndex}
    >
      <Logo
        src='https://cognni.ai/wp-content/uploads/2020/03/coggni-logo-600px.png'
        alt='Cognni'
      />

      <AnimatedHamburger setMobActive={setMobActive} mobActive={mobActive} />

      <NavigationWrapperWeb>
        {tabsObject.map((tab, index) => (
          <div key={index} className='tab-wrapper'>
            {/* TAB BUTTONS IN LOOP */}
            <Button
              target='_parent'
              href={tab.href}
              className='menu-btn'
              onMouseEnter={() => seTabIndex(index)}
            >
              {tab.name}
            </Button>
            {/* TAB BUTTON' MENU */}
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
        <Button
          target='_parent'
          href='https://onboard.cognni.ai/login'
          pd
          border
        >
          Login
        </Button>
        <Button
          target='_parent'
          href='https://onboard.cognni.ai/login'
          pd
          bg='#2196f3'
          blue='#2196f3'
          textColor='#FFF'
        >
          Sign Up Free
        </Button>
      </NavigationWrapperWeb>
      {/* ONLY MOBILE */}
      {mobActive && <Collapsible tabsObject={tabsObject} />}
    </Wrapper>
  );
};

export default Header;
