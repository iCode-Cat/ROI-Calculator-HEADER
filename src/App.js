import './App.scss';
import Header from './Components/Header';
import { useEffect, useRef, useState } from 'react';

function App() {
  const header = useRef();
  const [tabIndex, seTabIndex] = useState(null);

  const sendMessageParent = ({ message }) => {
    window.parent.postMessage(message, '*');
  };

  useEffect(() => {
    setInterval(() => {
      let scrollSize = header.current.clientHeight;
      sendMessageParent({ message: scrollSize });
    }, 1000);
  }, []);

  return (
    <div className='App'>
      <Header tabIndex={tabIndex} seTabIndex={seTabIndex} header={header} />
    </div>
  );
}

export default App;
