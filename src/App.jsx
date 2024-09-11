import { useState } from 'react'
import { linkData } from './links';
import QRBox from './componets/QRBox';
import BottomNav from './BottomNav';
import LinkBox from './componets/LinkBox';
import Top from './componets/Top';

function App() {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <Top />
      <QRBox qrImage={linkData[current].image} type={linkData[current].type} />
      {linkData[current].url && (<LinkBox url={linkData[current].url} type={linkData[current].type} />)}
      <BottomNav
        value={current}
        setValue={setCurrent}
      />
    </>
  )
}

export default App
