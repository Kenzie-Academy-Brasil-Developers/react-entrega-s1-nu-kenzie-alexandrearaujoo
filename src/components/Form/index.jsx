import { useState } from 'react'
import './styles.css'
import Button from '../Button'

const Form = ({handleCarList}) => {

    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [type, setType] = useState('')

    const addCard = (e) => {
        e.preventDefault()

        const newCard = {
            description,
            value: Number(value),
            type
        }

        handleCarList(newCard)
    }

    
    return (
        <form onSubmit={addCard}>
            <div className='description'>
                <label className='descricao'>Descrição</label>
                <input type="text" 
                        className='inputDescription'
                        onChange={(e) => setDescription(e.currentTarget.value)}
                        placeholder='Digite aqui sua descrição'
                />
                <label className='exemplo'>Ex: Compra de roupas</label>
            </div>
            <div className='values'>
            <label className='labelValue'>Valor</label>
            <label className='typeValue'>Tipo de Valor</label>
            <input type="text" 
                    className='inputValue'
                    onChange={(e) => setValue(e.currentTarget.value)}
                    placeholder='1 R$'
            />
            
            <select onChange={(e) => setType(e.currentTarget.value)}>
                <option value="" disabled selected>Selecione...</option>
                <option value="Entrada">Entrada</option>
                <option value="Despesas"> Despesas </option>
            </select>
            </div>
            <Button className="btn_submit"type="submit">Inserir valor</Button>
        </form>
    )
}

export default Form