import './styles.css'
import NoCard from './NoCard.svg'
import Card from '../Card'
import {useState} from 'react'
import Button from '../Button'

const List = ({listTransactions, setListTransactions}) => {

    const [isFilter, setIsFilter] = useState(false)
    const [filterList, setFIlterList] = useState([...listTransactions])

    const Empty  = () => (
        <>
            <h1 className='noCardTitle'>Você ainda não possui nenhum lançamento</h1>
            <img src={NoCard} alt='Vitrine vazia' className='imgNoCard'/>
        </>
    )

    const filters = (btn) => {
        btn !== 'todos' ? setIsFilter(true) : setIsFilter(false)
        const newArray = listTransactions.filter(({type}) => type === btn)
        setFIlterList(newArray)
    }

    const removeItem = (transactionRecebida) => {
        const remove = listTransactions.filter(transaction => transaction !== transactionRecebida)
        setListTransactions(remove)
    }

    return (
        <> 
        <nav>
            <h2>Resumo financeiro</h2>
            <div className='buttons'>
                <Button className='btn-todos'onClick={() => filters('todos')}> Todos </Button>
                <Button className='btn-entradas' onClick={() => filters('Entrada')}> Entradas </Button>
                <Button className='btn-despesas' onClick={() => filters('Despesas')}> Despesas </Button>
            </div>
        </nav>
                <ul className='list-geral'>
                {listTransactions.length === 0 ? Empty() : isFilter === false                   
                ? listTransactions.map((transaction, index) => <Card removeItem={removeItem} transaction={transaction} key={index} />) 
                : filterList.map((transaction, index) => <Card removeItem={removeItem} transaction={transaction} key={index} />)
                }
            </ul>
          
        </>
    )
}

export default List