import './styles.css'
import Button from '../Button'

const Card = ({transaction, removeItem}) => {

    return (
        <>      
                    <li className={transaction.type === 'Entrada' ? 'list-entrada' : 'list-despesa'}>
                        <div className='infos'>
                        <p className='pDescricao'>{transaction.description}</p>
                        <span className='spanValue'>R$: {transaction.value.toFixed(2).replace('.', ',')}</span>
                        <Button className='trash' onClick={() => removeItem(transaction)}>  </Button>
                        </div>
                        <span className='types'>{transaction.type}</span>
                    </li>                  
          
        </>
    )
}

export default Card