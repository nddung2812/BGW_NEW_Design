import './App.css';
import { MainLogo } from './components/Global/MainLogo';
import { Sec1Main } from './components/Sec1/Sec1Main';
import { Sec2Main } from './components/Sec2/Sec2Main';

function App() {

  return (
    <div className='app'>
      <MainLogo />
      <Sec1Main />
      <Sec2Main />
    </div>
  )
}

export default App;
