import './App.scss';
import Header from './Components/Header';
import { useEffect, useRef, useState } from 'react';

function App() {
  const header = useRef();
  const [tabIndex, seTabIndex] = useState(null);

  const sendMessageParent = (msg) => {
    window.parent.postMessage(msg, '*');
  };

  useEffect(() => {
    setInterval(() => {
      let scrollSize = header.current.clientHeight;
      console.log(scrollSize);
      sendMessageParent(scrollSize);
    }, 100);
  }, []);

  return (
    <div className='App'>
      <Header tabIndex={tabIndex} seTabIndex={seTabIndex} header={header} />
    </div>
  );
}

export default App;
