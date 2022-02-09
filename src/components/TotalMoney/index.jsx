const TotalMoney = ({listTransactions}) => {



    return (
        <div className="valorTotal">
            <span>Valor total: </span>
            <span>
                {
                `$: ${listTransactions.reduce((acc, {value, type}) => type === 'Entrada' ? acc + value : acc - value , 0)}`
                } 
            </span>
        </div>
    )
}

export default TotalMoney