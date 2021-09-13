import './App.scss';
import Header from './Components/Header';
import { useEffect, useRef, useState } from 'react';

function App() {
  const header = useRef();
  const [tabIndex, seTabIndex] = useState(null);
  const [height, setHeight] = useState();

  const sendMessageParent = (msg) => {
    window.parent.postMessage(msg, '*');
  };

  useEffect(() => {
    setInterval(() => {
      let scrollSize = header.current.clientHeight;
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
