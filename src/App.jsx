import './App.css';
import { MainLogo } from './components/Global/MainLogo';
import { Sec1Main } from './components/Sec1/Sec1Main';
import { Sec2Main } from './components/Sec2/Sec2Main';
import { Sec3Main } from './components/Sec3/Sec3Main';
import { Sec4Main } from './components/Sec4/Sec4Main';

function App() {

  return (
    <div className='app'>
      <MainLogo />
      <Sec1Main />
      <Sec2Main />
      <Sec4Main />
      <Sec3Main />
    </div>
  )
}

export default App;
