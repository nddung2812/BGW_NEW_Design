import './App.css';
import { Preloader } from './components/Preloader/Preloader';
import { VerticalNavbar } from './components/Global/VerticalNavbar'
import { MainLogo } from './components/Global/MainLogo';
import { Sec1Main } from './components/Sec1/Sec1Main';
import { Sec2Main } from './components/Sec2/Sec2Main';
import { Sec3Main } from './components/Sec3/Sec3Main';
import { Sec4Main } from './components/Sec4/Sec4Main';
import { Sec5Main } from './components/Sec5/Sec5Main';
import { Sec6Main } from './components/Sec6/Sec6Main';

function App() {

  return (
    <>
      <Preloader />
      <div className='app'>
      <div className="vertical-nav">
        <VerticalNavbar />
      </div>
        <MainLogo />
        <Sec1Main />
        <Sec2Main />
        <Sec4Main />
        <Sec5Main />
        <Sec3Main />
        <Sec6Main />
      </div>
    </>
  )
}

export default App;
