import './reset.css'
import './App.css';
import { useState } from 'react'
import Form from './components/Form';
import List from './components/List';
import TotalMoney from './components/TotalMoney';
import Header from './components/Header';
import LandingPage from './components/LandingPage';

function App() {

  const [listTransactions, setListTransactions] = useState([])

  const handleCarList = (cards) => {
    setListTransactions([...listTransactions, cards])
  }

  const [isStart, setIsStart] = useState(true)

  const startSection = () => {
    setIsStart(!isStart)
  }

  return (
    <>
    {isStart ? (
      <> 
      <LandingPage startSection={startSection}/>
      </>
    ) : (
      <> 
      <Header landingPage={startSection}/>
        <div className="App">
        <section className='section-form'>
            <div className='form-register'>
              <Form handleCarList={handleCarList}/>
              <TotalMoney listTransactions={listTransactions} />
            </div>
          </section>
          <section className='section-list'>     
          <List setListTransactions={setListTransactions} listTransactions={listTransactions} />
          </section>
        </div>
      </>
    )}
      
    </>
  );
}

export default App;
