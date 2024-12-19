import { Route, Routes } from 'react-router-dom';
import './App.css';
import Gift from './Gift/Gift';
import MainCard from './Main/MainCard';
import SecretMsg from './SecretMsg/SecretMsg';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Gift/>}/>
        <Route path='/Main' element={<MainCard/>}/>
        <Route path='/Main/secret-msg' element={<SecretMsg/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
