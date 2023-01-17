import { useState } from 'react';
import Modal from './Container/Modal/Modal';
import './App.scss';

const App = () => {

  const [modalValue, setModalValue] = useState(null);

  const handleClick = (e) => {
    if (e.target.classList.contains("App__login")) {
      setModalValue("login");
    } else if (e.target.classList.contains("App__signUp")){
      setModalValue("signUp");
    } else {
      setModalValue(null);
    }
  }

  return (
    <div className="App">
      <button className='App__login' onClick={handleClick}>Login</button>
      <button className='App__signUp' onClick={handleClick}>Sign in</button>
      {modalValue && <Modal value={modalValue} close={handleClick} />}
    </div>
  );

}

export default App;
