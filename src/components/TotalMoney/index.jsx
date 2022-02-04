const TotalMoney = ({listTransactions}) => {

    const total = listTransactions.reduce((acc,{value}) => acc + value, 0)

    return (

        <div className="valorTotal">
            <span>Valor total: </span>
            <span>$ {total}</span>
        </div>
    )
}

export default TotalMoney