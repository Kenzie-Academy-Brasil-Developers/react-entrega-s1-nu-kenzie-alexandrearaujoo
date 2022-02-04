import './reset.css'
import './App.css';
import { useState } from 'react'
import Form from './components/Form';
import List from './components/List';
import TotalMoney from './components/TotalMoney';
import Header from './components/Header';

function App() {

  const [listTransactions, setListTransactions] = useState([])

  const handleCarList = (cards) => {
    setListTransactions([...listTransactions, cards])
  }

  return (
    <>
      <Header />
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
  );
}

export default App;
