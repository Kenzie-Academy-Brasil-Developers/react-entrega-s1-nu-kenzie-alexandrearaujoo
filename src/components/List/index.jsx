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
        //Verifica o parametro passado na função se for diferente de todos, significa que a lista esta filtrada
        // então o setIsFilter vira verdadeiro.
        btn !== 'Todos' ? setIsFilter(true) : setIsFilter(false)
        // Filtra a lista pelo tipo de entrada
        const newArray = listTransactions.filter(({type}) => type === btn)
        //Seta o novo array filtrado na const filterList
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
                <Button className='btn-todos'onClick={() => filters('Todos')}> Todos </Button>
                <Button className='btn-entradas' onClick={() => filters('Entrada')}> Entradas </Button>
                <Button className='btn-despesas' onClick={() => filters('Despesas')}> Despesas </Button>
            </div>
        </nav>
                <ul className='list-geral'>
                {/*Verifica se o array listTransactions esta vazio, caso sim ele renderiza a imagem
                    do NoCard, logo apos ele verifica se o filtro esta no estado false, caso sim significa que 
                    nao tem nenhum filtro na lista e renderiza ela inteira, caso o filtro tiver no estado verdadeiro
                    ele rendereriza a lista filtrada
                */}
                {listTransactions.length === 0 ? Empty() : isFilter === false                   
                ? listTransactions.map((transaction, index) => <Card removeItem={removeItem} transaction={transaction} key={index} />) 
                : filterList.map((transaction, index) => <Card removeItem={removeItem} transaction={transaction} key={index} />)
                }
            </ul>
          
        </>
    )
}

export default List